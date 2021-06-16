import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
import '../roverphotos.css'

export default function Opportunity () {

    const [opportunityPics, setOpportunityPics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
            .then(res => res.json())
            .then(res => setOpportunityPics(res.latest_photos))
        }, [])


return (
<>
    <div>
        <table id="rovernavlink">
            <td><NavLink exact to="/rover-photos/curiosity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Curiosity</NavLink></td>
            <td><NavLink exact to="/rover-photos/opportunity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Opportunity</NavLink></td>
            <td><NavLink exact to="/rover-photos/perseverance" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Perserverance</NavLink></td>
            <td><NavLink exact to="/rover-photos/spirit" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
        </table>
    <h1>Opportunity is no longer active.  It broadcast its last message on June 10, 2019.</h1>
    </div>
    <div className='image-list'>
        {opportunityPics.map(img => {
            return (
                <>
                <img className='imgURL' src={img.img_src} alt=''/>
                </>
            )
        })}
    </div>

</>
)

}
// https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh