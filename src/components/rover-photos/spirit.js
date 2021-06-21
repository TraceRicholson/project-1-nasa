import { useState, useEffect } from "react"
import { Link, NavLink } from 'react-router-dom'
import '../roverphotos.css'
// import '../../nav.style.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Spirit () {
    const classes = useStyles()
    const [spiritPics, setSpiritPics] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
          .then(res => res.json())
          .then(res => setSpiritPics(res.latest_photos))
      }, []);



return (
<>
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
    <h1>Spirit</h1>

    <div id="aboutSpirit">
            <h3>Operating Status: Inactive. Last broadcast message was on May 25, 2011.</h3>
            <h3>NASA Mission: MER-A.</h3>
            <h3> Mission Objectives: </h3>
                <li> Spirit and it's twin rover Opportunity were both tasked with studying sites on Mars where conditions may have been favorable for life</li>
                <li> Sprit studied the history of climate and water at sites on Mars where conditions may once have been favorable to life. </li>
        </div>


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
