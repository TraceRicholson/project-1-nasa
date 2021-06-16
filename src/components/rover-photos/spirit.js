import { useState, useEffect } from "react"
import { Link, NavLink } from 'react-router-dom'
import '../roverphotos.css'
import '../../nav.style.css'


export default function Spirit () {

    const [spiritPics, setSpiritPics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
          .then(res => res.json())
          .then(res => setSpiritPics(res.latest_photos))
      }, []);



return (
<>
    <table id="rovernavlink">
        <td><NavLink exact to="/rover-photos/curiosity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Curiosity</NavLink></td>
        <td><NavLink exact to="/rover-photos/opportunity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Opportunity</NavLink></td>
        <td><NavLink exact to="/rover-photos/perseverance" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Perserverance</NavLink></td>
        <td><NavLink exact to="/rover-photos/spirit" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
    </table>
    <h1>Spirit is no longer active.  It broadcast its last message on May 25, 2011.</h1>
    <div className='image-list'>
        {spiritPics.map(img => {
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
