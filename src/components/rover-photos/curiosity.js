import { useState, useEffect } from "react"
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

export default function Curiosity () {
    const classes = useStyles()
    const [curiosityPics, setCuriosityPics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
            .then(res => res.json())
            .then(res => setCuriosityPics(res.latest_photos))
        }, [])


return (

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

        <h1>Curiosity</h1>

        <div id="aboutCuriosity">
            <h3>Operating Status: Active</h3>
            <h3>NASA Mission: Mars 2011.</h3>
            <h3> Mission Objectives: </h3>
                <li>Survey Gale Crater for signs of past life. </li>
                <li>Collect and Analyze Martian geology. </li>
        </div>



        <div className='image-list'>
        {curiosityPics.map(img => {
            return (
                <>
                <img className='imgURL' src={img.img_src} alt=''/>
                </>
            )
        })}
    </div>

    </div>

)

}

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh