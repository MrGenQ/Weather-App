import { WiDirectionUp, WiDirectionUpRight, WiDirectionRight, WiDirectionDownRight, WiDirectionDown, WiDirectionDownLeft, WiDirectionLeft, WiDirectionUpLeft } from "react-icons/wi";

const RenderDirection = (props) =>{
    const DirectionIcon = () => {
        if(props.windDirection >= 0 && props.windDirection <= 45) return <WiDirectionUp size={30}/>
        if(props.windDirection >= 46 && props.windDirection <= 90) return <WiDirectionUpRight size={30}/>
        if(props.windDirection >= 91 && props.windDirection <= 135) return <WiDirectionRight size={30}/>
        if(props.windDirection >= 136 && props.windDirection <= 180) return <WiDirectionDownRight size={30}/>
        if(props.windDirection >= 181 && props.windDirection <= 225) return <WiDirectionDown size={30}/>
        if(props.windDirection >= 226 && props.windDirection <= 270) return <WiDirectionDownLeft size={40}/>
        if(props.windDirection >= 271 && props.windDirection <= 315) return <WiDirectionLeft size={23}/>
        if(props.windDirection >= 316 && props.windDirection <= 360) return <WiDirectionUpLeft size={30}/>

        
    }
    return(
            <>
                
                <td>
                    {DirectionIcon()}
                    {props.windSpeed}
                </td>
            </>
    )
}
export default RenderDirection