import DayOfTheWeek from "../DayofTheWeek"
const RenderTime = (props) =>{
    return(
            <>
                
               <td>
                   {props.forecastTimeUtc.substring(11, 16)}
                   {DayOfTheWeek(props)}
               </td>
            </>
    )
}
export default RenderTime