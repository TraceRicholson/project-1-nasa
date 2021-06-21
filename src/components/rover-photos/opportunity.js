import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom'
import '../roverphotos.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));






export default function Opportunity () {
    const classes = useStyles()
    const [opportunityPics, setOpportunityPics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
            .then(res => res.json())
            .then(res => setOpportunityPics(res.latest_photos))
        }, [])


return (
<>
    <div>
        <div className={classes.root}>
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
        </div>


    </div>

    <h1>Opportunity</h1>
        <div id="aboutOpportunity">
            <h3>Operating Status: Inactive. Last broadcast message was on June 10, 2018</h3>
            <h3>NASA Mission: MER-B.</h3>
            <h3> Mission Objectives: </h3>
                <li> Opportunity and it's twin rover Spirit were both tasked with studying sites on Mars where conditions may have been favorable for life.</li>
            <h3> Mission Findings: </h3>
                <li> Mars was soaked in salt water. </li>
                <li> Mars had a warm climate, a thicker atmosphere, and neutral-pH water levels.</li>
                <li> Mars had hot water sources ie. Hot springs and hot steam vents. </li>
                <li> Mars had active volcanoes. </li>
                <li> Mars had flowing water ie. Rivers, Lakes, etc. </li>
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