// import { useState} from "react"
import {NavLink } from 'react-router-dom'
import '../App.css'


export default function Photos () {

  // const [photoData, setPhotoData] = useState([])

  // useEffect(() => {
  //     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
  //       .then(res => res.json())
  //       .then(res => setPhotoData(res))
  //   }, [])

  return (

    <>
      <h1>Click on the name of a Mars Rover to see its latest photos!</h1>

      <table class="center">
        <td><NavLink exact to="/rover-photos/curiosity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Curiosity</NavLink></td>
        <td><NavLink exact to="/rover-photos/opportunity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Opportunity</NavLink></td>
        <td><NavLink exact to="/rover-photos/perseverance" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Perserverance</NavLink></td>
        <td><NavLink exact to="/rover-photos/spirit" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
      </table>


    </>


  )


  }