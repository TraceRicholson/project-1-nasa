import { useState, useEffect } from "react"
import '../App.css'
import Box from '@material-ui/core/Box'
import { sizing, positions } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




export default function PhotoOfTheDay () {
const [index, setIndex] = useState(0)
const [pod, setPhotoOfTheDay] = useState([])
const classes = useStyles()


useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=73BdaPJFZ0p7FxCRPfLs5wRmpQPJHRYMQcFD3abh')
      .then(res => res.json())
      .then(res => setPhotoOfTheDay(res))
  }, [])

  console.log("Photo Of Day", pod)

function handleDislike () {
    document.getElementById('pod-desc').hidden = true
    document.getElementById('photo').src = 'https://cdn.shopify.com/s/files/1/0284/2391/3547/articles/American-Pitbull-Puppies-6.JPG_c4357295-9ee4-45f8-9718-e36c98022c46_1200x1200.jpg?v=1603063314'
    document.getElementById('photo-suck-desc').hidden = false
    document.getElementById('button2').disabled = true
    document.getElementById('pod-title').hidden = true
  }





return (
  <>
  <Box bgcolor="text.secondary" alignItems="center"
  justifyContent="center" p={3} >
    <h1>This is your NASA photo of the day!!</h1>
    <h1>Does this photo suck?</h1>
    <div className={classes.root}>
      <Button id='button2' variant="contained" color="primary" onClick={handleDislike} disabled={false}>YES</Button>
      {/* <Button variant="contained" color="primary"onClick={handleNext}>Next Day</Button> */}
    </div>
    <Box alignItems="center" justifyContent="center" p={10} >
    <h2 id='photo-suck-desc' hidden={true}>Here is a photo of cute Pitbull puppy instead. 🥺</h2>
    <h3 id ='pod-title' hidden={false}>You are viewing {pod.title}</h3>
    <p id='pod-desc' hidden={false}>{pod.explanation}</p>
    </Box>
    <img id='photo' src={pod.url} alt='NASA Photo of the Day'></img>

  </Box>
  </>



)}