import { useState, useEffect } from "react"
import { Link, NavLink } from 'react-router-dom'
import '../roverphotos.css'
import '../../nav.style.css'
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
