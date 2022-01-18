import { WiHumidity } from "react-icons/wi";
const RenderHumidity = (props) =>{
    return(
            <>
               <td>{props.relativeHumidity}<WiHumidity color="darkblue" size={30}/></td>
            </>
    )
}
export default RenderHumidity