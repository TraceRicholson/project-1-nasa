
import './App.css';
import Photos from './components/roverphotos';
import Weather from './components/weather';
import PhotoOfTheDay from './components/photoOfTheDay';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/nav';

function App() {
  return (
  <div>
    <Nav/>
    <h1>This is your photo of the day!! </h1>
    <Switch>
      <Route exact path="/" component={PhotoOfTheDay}/>
      <Route exact path="/rover_photos" component={Photos}/>
      <Route exact path="/weather" component={Weather}/>
    </Switch>
  </div>




 );
}

export default App;
