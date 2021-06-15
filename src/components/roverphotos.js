import { useState, useEffect } from "react"
import Spirit from "./rover-photos/spirit"
import { Link, NavLink } from 'react-router-dom'


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
      <table>
        <td><a href="/rover-photos/curiosity.js">Curiosity</a></td>
        <td><a href="/rover-photos/opportunity.js">Opportunity</a></td>
        <td><NavLink exact to="/rover-photos/spirit" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
      </table>

      {/* <NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Home</NavLink> */}

    </>

  )


  }