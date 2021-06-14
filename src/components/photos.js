import { useState, useEffect } from "react"


export default function Photos () {

  const [photoData, setPhotoData] = useState([])

  useEffect(() => {
      fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
        .then(res => res.json())
        .then(res => setPhotoData(res))
    }, [])

console.log('photos', photoData)

  return (

    <>
      <h1>PHOTO TEST</h1>
      <h2>Photo test 2</h2>
    </>

  )


  }