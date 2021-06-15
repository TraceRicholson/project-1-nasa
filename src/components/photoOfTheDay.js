import { useState, useEffect } from "react"


export default function PhotoOfTheDay () {

const [pod, setPhotoOfTheDay] = useState([])

useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
      .then(res => res.json())
      .then(res => setPhotoOfTheDay(res))
  }, [])

  console.log("Photo Of Day", pod)



return (
  <div>
    <h1>Does this photo suck?</h1>
    <img src={pod.url}></img>
  </div>


)}