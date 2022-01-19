import { WiDaySunny, WiDayCloudy, WiDayHail, WiCloud, WiDayShowers, WiDayRain, WiDayRainWind, WiDaySleet, WiDaySnow, WiDaySnowWind, WiDayFog } from "react-icons/wi";
import { WiNightClear, WiNightCloudy, WiNightHail, WiNightShowers, WiNightRain, WiNightRainWind, WiNightSleet, WiNightSnow, WiNightSnowWind, WiNightFog } from "react-icons/wi";
const RenderCondition = (props) =>{
    const time = props.forecastTimeUtc.substring(11, 13)
    var nightVariable = false
    const IsNight = () =>{
        if(Math.floor(time) >= 18 || Math.floor(time) < 6){
            nightVariable = true
            
        }
    }
    const DayIcons = () =>{
        if(props.conditionCode === 'clear') return <div className="condition"><WiDaySunny color="yellow" size={60}/></div>
            else if(props.conditionCode === 'isolated-clouds') return <div className="condition"><WiDayCloudy color="yellow" size={60}/></div>
               else if(props.conditionCode === 'scattered-clouds') return <div className="condition"><WiDayHail color="yellow" size={60}/></div>
                    else if(props.conditionCode === 'overcast') return <div className="condition"><WiCloud color="yellow" size={60}/></div>
                        else if(props.conditionCode === 'light-rain') return <div className="condition"><WiDayShowers color="yellow" size={60}/></div>
                            else if(props.conditionCode === 'moderate-rain') return <div className="condition"><WiDayRain color="yellow" size={60}/></div>
                                else if(props.conditionCode === 'heavy-rain') return <div className="condition"><WiDayRainWind color="yellow" size={60}/></div>
                                    else if(props.conditionCode === 'sleet') return <div className="condition"><WiDaySleet color="yellow" size={60}/></div>
                                        else if(props.conditionCode === 'light-snow') return <div className="condition"><WiDaySnow color="yellow" size={60}/></div>
                                            else if(props.conditionCode === 'moderate-snow') return <div className="condition"><WiDaySnowWind color="yellow" size={60}/></div>
                                                else if(props.conditionCode === 'heavy-snow') return <div className="condition"><WiDaySnowWind color="yellow" size={60}/></div>
                                                    else if(props.conditionCode === 'fog') return <div className="condition"><WiDayFog color="yellow" size={60}/></div>
    }
    const NightIcons = () =>{
        if(props.conditionCode === 'clear') return <div className="nightCondition"><WiNightClear size={60}/></div>
            else if(props.conditionCode === 'isolated-clouds') return <div className="nightCondition"><WiNightCloudy size={60}/></div>
               else if(props.conditionCode === 'scattered-clouds') return <div className="nightCondition"><WiNightHail size={60}/></div>
                    else if(props.conditionCode === 'overcast') return <div className="nightCondition"><WiCloud size={60}/></div>
                        else if(props.conditionCode === 'light-rain') return <div className="nightCondition"><WiNightShowers size={60}/></div>
                            else if(props.conditionCode === 'moderate-rain') return <div className="nightCondition"><WiNightRain size={60}/></div>
                                else if(props.conditionCode === 'heavy-rain') return <div className="nightCondition"><WiNightRainWind size={60}/></div>
                                    else if(props.conditionCode === 'sleet') return <div className="nightCondition"><WiNightSleet size={60}/></div>
                                        else if(props.conditionCode === 'light-snow') return <div className="nightCondition"><WiNightSnow size={60}/></div>
                                            else if(props.conditionCode === 'moderate-snow') return <div className="nightCondition"><WiNightSnowWind size={60}/></div>
                                                else if(props.conditionCode === 'heavy-snow') return <div className="nightCondition"><WiNightSnowWind size={60}/></div>
                                                    else if(props.conditionCode === 'fog') return <div className="nightCondition"><WiNightFog size={60}/></div>
    }
    return(
            <>
                <td>
                    {IsNight()}
                    {(nightVariable === false)? DayIcons():NightIcons()}
                    {(props.airTemperature > 0)? ('+' + props.airTemperature):props.airTemperature}
                </td>
            </>
    )
}
export default RenderCondition