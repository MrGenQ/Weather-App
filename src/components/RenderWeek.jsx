import DayOfTheWeek from "../DayofTheWeek"
import { WiDaySunny, WiDayCloudy, WiDayHail, WiCloud, WiDayShowers, WiDayRain, WiDayRainWind, WiDaySleet, WiDaySnow, WiDaySnowWind, WiDayFog } from "react-icons/wi";
import { Accordion } from "react-bootstrap";
const RenderWeek = (props) =>{
    var today = new Date();
    
    const DayIcons = () =>{
        if(props.conditionCode === 'clear') return <div className="condition"><WiDaySunny color="yellow" size={80}/></div>
            else if(props.conditionCode === 'isolated-clouds') return <div className="condition"><WiDayCloudy color="yellow" size={80}/></div>
               else if(props.conditionCode === 'scattered-clouds') return <div className="condition"><WiDayHail color="yellow" size={80}/></div>
                    else if(props.conditionCode === 'overcast') return <div className="condition"><WiCloud color="yellow" size={80}/></div>
                        else if(props.conditionCode === 'light-rain') return <div className="condition"><WiDayShowers color="yellow" size={80}/></div>
                            else if(props.conditionCode === 'moderate-rain') return <div className="condition"><WiDayRain color="yellow" size={80}/></div>
                                else if(props.conditionCode === 'heavy-rain') return <div className="condition"><WiDayRainWind color="yellow" size={80}/></div>
                                    else if(props.conditionCode === 'sleet') return <div className="condition"><WiDaySleet color="yellow" size={80}/></div>
                                        else if(props.conditionCode === 'light-snow') return <div className="condition"><WiDaySnow color="yellow" size={80}/></div>
                                            else if(props.conditionCode === 'moderate-snow') return <div className="condition"><WiDaySnowWind color="yellow" size={80}/></div>
                                                else if(props.conditionCode === 'heavy-snow') return <div className="condition"><WiDaySnowWind color="yellow" size={80}/></div>
                                                    else if(props.conditionCode === 'fog') return <div className="condition"><WiDayFog color="yellow" size={80}/></div>
    }
    const WeatherDescription = () => {
        if(props.conditionCode === 'clear') return <div>Sunny blue skies</div>
            else if(props.conditionCode === 'isolated-clouds') return <div>Sky is a little cloudy, without any prospect of rain</div>
               else if(props.conditionCode === 'scattered-clouds') return <div>Sky a little clouded and temporary hails</div>
                    else if(props.conditionCode === 'overcast') return <div>Very clouded, little chance of Sun, low propability of rain</div>
                        else if(props.conditionCode === 'light-rain') return <div>Hight chance of light rain</div>
                            else if(props.conditionCode === 'moderate-rain') return <div>Rains in frequent interval</div>
                                else if(props.conditionCode === 'heavy-rain') return <div>Rains most of the time with high wind speed</div>
                                    else if(props.conditionCode === 'sleet') return <div>A smooth coating of ice formed on objects by freezing rain or snow</div>
                                        else if(props.conditionCode === 'light-snow') return <div>Very light snowing part time</div>
                                            else if(props.conditionCode === 'moderate-snow') return <div>Brief, but intense periods of moderate to heavy snowfall with strong, gusty surface winds and measurable snowfal</div>
                                                else if(props.conditionCode === 'heavy-snow') return <div> Winter storm combined of sleet, snow, ice, and wind</div>
                                                    else if(props.conditionCode === 'fog') return <div>low-lying cloud</div>
    }
    return(
            <>
            
                
            {(today.getHours() === Math.floor(props.forecastTimeUtc.substring(11, 13)) && Math.floor(props.forecastTimeUtc.substring(8, 10)) === today.getDate())?
            <>
            <th className='primary'>
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={props.key}>
                <Accordion.Header>
                    <div>
                    {DayIcons()}
                        
                {'Today '}
                {props.forecastTimeUtc.substring(8, 10) + '\n'}
                {(Math.floor(props.forecastTimeUtc.substring(11, 13))=== today.getHours())? (props.airTemperature >= 0)? ('+' + props.airTemperature):props.airTemperature:null}
                </div>
                </Accordion.Header>
                <Accordion.Body><div>{WeatherDescription()}</div></Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </th>
                </>
            :null}
            {(props.forecastTimeUtc.substring(11, 16) === '00:00')?
            <>
            <th>
             <Accordion defaultActiveKey="0" decoration='none'>
            <Accordion.Item eventKey={props.key}>
            <Accordion.Header>
                {DayIcons()}   
                {DayOfTheWeek(props) + ' '}
                {props.forecastTimeUtc.substring(8, 10) + '\n'}
                {(props.forecastTimeUtc.substring(11, 16) === '00:00')? props.airTemperature:null}
                
                </Accordion.Header>
                <Accordion.Body>{WeatherDescription()}</Accordion.Body>
                </Accordion.Item>
                </Accordion>
                </th>
                </>
            :null}
            </>
    )
}
export default RenderWeek
