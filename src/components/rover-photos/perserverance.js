import { useState, useEffect } from "react"
import { Link, NavLink } from 'react-router-dom'
import '../roverphotos.css'

export default function Curiosity () {

    const [perseverancePics, setPerseverancePics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
            .then(res => res.json())
            .then(res => setPerseverancePics(res.latest_photos))
        }, [])


return (

    <div>
        <table id="rovernavlink">
            <td><NavLink exact to="/rover-photos/curiosity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Curiosity</NavLink></td>
            <td><NavLink exact to="/rover-photos/opportunity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Opportunity</NavLink></td>
            <td><NavLink exact to="/rover-photos/perseverance" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Perserverance</NavLink></td>
            <td><NavLink exact to="/rover-photos/spirit" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
        </table>
    <h1>Perseverance!!</h1>
    <h2>Perserverance is NASA's most recent rover on Mars. Perserverance was sent to Mars via NASA mission "Mars 2020".</h2>
    <h3>Operating Status:</h3>

        {perseverancePics.map(img => {
            return (
                <>
                <img className='imgURL' src={img.img_src} alt=''/>
                </>
            )
        })}

    </div>

)

}