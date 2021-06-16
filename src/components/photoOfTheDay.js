import { useState, useEffect } from "react"
import '../App.css'
import Box from '@material-ui/core/Box'
import { sizing, positions } from '@material-ui/system';



export default function PhotoOfTheDay () {

const [pod, setPhotoOfTheDay] = useState([])

useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
      .then(res => res.json())
      .then(res => setPhotoOfTheDay(res))
  }, [])

  console.log("Photo Of Day", pod)



return (
  <Box bgcolor="text.secondary" align="center"
  justify="center">
    <h1>This is your photo of the day!!</h1>
    <h1>Does this photo suck?</h1>
    <img src={pod.url} alt='NASA Photo of the Day'></img>
    <p>{pod.explanation}</p>

  </Box>



)}