import { useState, useEffect } from "react"
import Box from '@material-ui/core/Box'
import { sizing, positions } from '@material-ui/system';
import Divider from '@material-ui/core/Divider';



export default function Weather () {

const [weatherData, setWeatherData] = useState([])

useEffect(() => {
  // fetch('https://api.nasa.gov/curiosity_weather/?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh&feedtype=json&ver=1.0')
  fetch ('https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json')

  .then(res => res.json())
  .then(res => setWeatherData(res.soles))
}, [])

console.log('weather', weatherData)

let currentSol = weatherData[0] || 'UNDEFINED'


console.log('current', currentSol)

return (
<>
  <Box bgcolor="text.secondary" align="center"
  justify="center" p={5}
>
    <h1>Latest Mars Weather Data</h1>
    <h5>This page provides per-Sol summary data for each of the last seven available Sols (Martian Days).</h5>
    <h5>Data will be delayed due to transmit times between Mars and Earth.</h5>
  </Box>

  <Box bgcolor="text.secondary" align="left"
  justify="left" p={10}>
    <h2>Per the latest data from Curiosity, you are viewing Sol {currentSol.sol}.  This corresponds to {currentSol.terrestrial_date} on Earth.   Curiositiy's current location is Gale Crater in the southern hemisphere of Mars, near the equator.</h2>
    <Divider />
    <h2>On this day, the atmostphere was {currentSol.atmo_opacity}.</h2>
    <Divider />
    <h2>The high temperature was {currentSol.max_temp}°C and the low temperature was {currentSol.min_temp}°C.</h2>
    <Divider />
    <h2>Sun Data:</h2>
      <p>Sunrise: {currentSol.sunrise}</p>
      <p>Sunset: {currentSol.sunset}</p>
      <p>UV Radiation: {currentSol.local_uv_irradiance_index}</p>
    <Divider />
    <h2>Wind Data:</h2>
      <p>Speed: {currentSol.wind_speed}</p>
      <p>Direction: {currentSol.wind_direction}</p>

  </Box>
</>

)


}

// http://marsweather.ingenology.com/v1/latest/

