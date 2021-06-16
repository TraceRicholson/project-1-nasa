
import './App.css';
import Photos from './components/roverphotos';
import Weather from './components/weather';
import PhotoOfTheDay from './components/photoOfTheDay';
import {Switch, Route} from "react-router-dom";
import Nav from './components/nav';
import Spirit from './components/rover-photos/spirit'
import Curiosity from './components/rover-photos/curiosity';
import Opportunity from './components/rover-photos/opportunity';
import Perseverance from './components/rover-photos/perserverance'


function App() {
  return (
  <div>
    <Nav/>

    <Switch>
      <Route exact path="/" component={PhotoOfTheDay}/>
      <Route exact path="/rover-photos" component={Photos}/>
      <Route exact path="/weather" component={Weather}/>
      <Route exact path="/rover-photos/spirit" component={Spirit}/>
      <Route exact path="/rover-photos/curiosity" component={Curiosity}/>
      <Route exact path="/rover-photos/opportunity" component={Opportunity}/>
      <Route exact path="/rover-photos/perseverance" component={Perseverance}/>
    </Switch>
  </div>




 );
}

export default App;
