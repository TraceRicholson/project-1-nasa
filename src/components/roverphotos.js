// import { useState} from "react"
import {NavLink } from 'react-router-dom'
import '../App.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Photos () {

  const classes = useStyles()
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
        <h1>Click on the name of a Mars Rover to see its latest photos!</h1>





    </>


  )


  }