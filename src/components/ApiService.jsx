import React, {useState, useEffect } from "react"
import RenderTime from "./RenderTime"
import RenderHumidity from "./RenderHumidity"
import RenderDirection from "./RenderDirection" 
import RenderCondition from "./RenderCondition"
import { Table} from "react-bootstrap"
import RenderWeek from "./RenderWeek"
import * as service from "../services/WorksServices"
import {useNavigate} from "react-router-dom"
import { GrAdd } from "react-icons/gr";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../services/AutSevices";

const ApiService = () => {
    //const [addCity, setAddCity] = useState(true)
    const[cities, setCities] = useState({
        city: ''
    })
    const[works, setWorks] = useState([])
    const [error] = useAuthState(auth)
    const navigate = useNavigate()
    const [weather, setWeather] = useState([])
    const url = 'https://api.meteo.lt/v1/places/'
    const term = '/forecasts/long-term'

    useEffect(()=>{
        fetch(`${url}${localStorage.getItem('city')}${term}`)
            .then(response => response.json())
            .then(data=>{
                setWeather(data)
                console.log(data)
            })
           
            .catch(error => {
                throw(error);
            })
    
    },[cities])
    const toFirebase = (data) =>{
        service.addCity(data)
    }
    useEffect(()=>{
        setCities({
            city: localStorage.getItem('city')
        })
    },[])
    const onSaveWorkHandler = async (data)=>{
        setCities({
            city:data
        })
        console.log(cities) 
        toFirebase(cities)
    }
    const MyCities = () =>{
            service.getAllCities((works)=>setWorks(works))
            console.log(works)
    }
    return(
        <>
            <div className="d-flex">
            <h3>{localStorage.getItem('city')}</h3>
            <button className="btn btn-dark" variant="dark" onClick={()=>{onSaveWorkHandler(localStorage.getItem('city'))}}><GrAdd color="white" size={20}/>Add to My Locations</button>
            <button className="btn btn-dark" onClick={()=>{MyCities()}}>My Cities</button>
            
            </div>
            <section className="oneWeek d-flex">
                <Table  striped bordered hover variant="light" responsive>
                    <tr height="200" width="400">
                    {(weather.forecastTimestamps)?weather.forecastTimestamps.map((w)=><RenderWeek key={w.forecastCreationTimeUtc} forecastTimeUtc={w.forecastTimeUtc} conditionCode={w.conditionCode} airTemperature={w.airTemperature}/>):null} 
                    </tr> 
                    </Table>
            </section>
            <section className="detailed">
            <Table className="moreDetailed" striped bordered hover responsive >
                <thead>
                <tr>
                    {(weather.forecastTimestamps)?weather.forecastTimestamps.map((w)=><RenderTime key={w.forecastCreationTimeUtc} forecastTimeUtc={w.forecastTimeUtc}/>):null}
                </tr>
                </thead>
                <tbody>
                <tr height="150">
                    {(weather.forecastTimestamps)?weather.forecastTimestamps.map((w)=><RenderCondition key={w.forecastCreationTimeUtc} airTemperature={w.airTemperature} conditionCode={w.conditionCode} forecastTimeUtc={w.forecastTimeUtc}/>):null}
                </tr>

                <tr>
                    {(weather.forecastTimestamps)?weather.forecastTimestamps.map((w)=><RenderHumidity key={w.forecastCreationTimeUtc} relativeHumidity={w.relativeHumidity}/>):null}
                </tr>
                <tr>
                    {(weather.forecastTimestamps)?weather.forecastTimestamps.map((w)=><RenderDirection key={w.forecastCreationTimeUtc} windDirection={w.windDirection} windSpeed={w.windSpeed}/>):null}
                </tr>
                </tbody>
            </Table>
            </section>
        </>
    )
}
export default ApiService