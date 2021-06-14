import { useState, useEffect } from "react"


export default function Weather () {

const [weatherData, setWeatherData] = useState([])

useEffect(() => {
    fetch('https://api.nasa.gov/insight_weather/?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh&feedtype=json&ver=1.0')
      .then(res => res.json())
      .then(res => setWeatherData(res))
  }, [])

  console.log(weatherData)



return (

  <div>
    <h1>WEATHER TEST</h1>
  </div>

)


}


