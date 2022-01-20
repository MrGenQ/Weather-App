import React, {useState, useEffect } from "react"
import RenderTime from "./RenderTime"
import RenderHumidity from "./RenderHumidity"
import RenderDirection from "./RenderDirection" 
import RenderCondition from "./RenderCondition"
import { Table, Accordion} from "react-bootstrap"
import RenderWeek from "./RenderWeek"
import * as service from "../services/WorksServices"
import { GrAdd } from "react-icons/gr";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../services/AutSevices";
import {ListGroup} from "react-bootstrap"

const ApiService = () => {
    const[cities, setCities] = useState({
        city: ''
    })
    const [search, setSearch] = useState("")
    const[works, setWorks] = useState([])
    const [error] = useAuthState(auth)
    const [weather, setWeather] = useState([])
    const url = 'https://api.meteo.lt/v1/places/'
    const term = '/forecasts/long-term'
    
    useEffect(()=>{
        setSearch(localStorage.getItem('city'))
        fetch(`${url}${search}${term}`)
            .then(response => response.json())
            .then(data=>{
                setWeather(data)
                console.log(data)
            })
           
            .catch(error => {
                throw(error);
            })
    
    },[search])
    const toFirebase = (data) =>{
        service.addCity(data)
    }
    
    const onSaveWorkHandler = async (data)=>{
        setCities({
            city:data
        })
        toFirebase(cities)
    }
    const MyCities = () =>{
            service.getAllCities((works)=>setWorks(works))
    }
    const chooseCity = (city) =>{
        localStorage.setItem('city', city)
        setSearch(city)
    }
    const getIdHandler = (id) => {
        service.deleteCity(id)
    }
    return(
        <>
        
    
            <div className="d-flex">
            <h3>{search}</h3>
            <button className="btn" onClick={()=>{onSaveWorkHandler(search)}}><GrAdd color="white" size={15}/>Add to My Locations</button>
            </div>
            <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={()=>{MyCities()}}>My Cities</Accordion.Header>
                    <Accordion.Body>
                    {works.map((w) => (<ListGroup.Item><button onClick={() => chooseCity(w.city)}>{w.city}</button></ListGroup.Item>))}
                    
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>

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