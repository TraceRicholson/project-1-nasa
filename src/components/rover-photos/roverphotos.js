// import { useState} from "react"
import {NavLink } from 'react-router-dom'
import '../App.css'
import Button from '@material-ui/core/Button';


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

      <Button variant="contained" color="primary">
        <NavLink exact to="/rover-photos/curiosity"
        style={{fontWeight: "bold", color: "white", textDecoration: "none"}} >Curiosity</NavLink>
      </Button>
      <Button variant="contained" color="primary">
        <NavLink exact to="/rover-photos/opportunity" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Opportunity</NavLink>
      </Button>
      <Button variant="contained" color="primary">
        <NavLink exact to="/rover-photos/perseverance" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Perseverance</NavLink>
      </Button>
      <Button variant="contained" color="primary">
        <NavLink exact to="/rover-photos/spirit" style={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink>
      </Button>





    </>


  )


  }