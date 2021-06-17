// import { useState, useEffect } from "react"
// import { Link, NavLink } from 'react-router-dom'

// export default function Curiosity () {

//     const [curiosityPics, setCuriosityPics] = useState([])

//     useEffect(() => {
//         fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/perserverence/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
//             .then(res => res.json())
//             .then(res => setCuriosityPics(res.latest_photos))
//         }, [])


// return (

//     <div>
//         <table>
//             <td><NavLink exact to="/rover-photos/curiosity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Curiosity</NavLink></td>
//             <td><NavLink exact to="/rover-photos/opportunity" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Opportunity</NavLink></td>
//             <td><NavLink exact to="/rover-photos/spirit" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
//             <td><NavLink exact to="/rover-photos/perserverance" activeStyle={{fontWeight: "bold", color: "white", textDecoration: "none"}}>Spirit</NavLink></td>
//         </table>
//         <h1>Curiosity is currently active and operational.  See latest images below.</h1>
//         <div className='image-list'>
//         {curiosityPics.map(img => {
//             return (
//                 <>
//                 <img className='imgURL' src={img.img_src} alt=''/>
//                 </>
//             )
//         })}
//     </div>

//     </div>

// )

// }