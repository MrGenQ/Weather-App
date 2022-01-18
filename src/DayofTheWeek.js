const DayOfTheWeek = (props) => {
    var dt = new Date(props.forecastTimeUtc.substring(0, 10)); 
    if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 0) return '\nSun'
        else if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 1) return '\nMon'
            else if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 2) return '\nTue'
                else if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 3) return '\nWed'
                    else if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 4) return '\nThu'
                        else if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 5) return '\nFri'
                            else if(props.forecastTimeUtc.substring(11, 16) === '00:00' && dt.getDay() === 6) return '\nSat'
}
export default DayOfTheWeek