import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import './index.css';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Team from './components/Team';
import CM from './components/CM';
import Physicians from './components/Physicians';
import Menu from './components/Menu';
import logoPic from './images/EH logo.jpg';

// import squash-burger from 'squash-burger.js'
// import SimpleImageSlider from "react-simple-image-slider";
function App(props) {
  return (
    <div>
  {/* <Menu/> */}

    <nav id="regularMenu" role="navigation">
<div class="overlay">
  <label for="toggle"></label>
</div>
{/* <input type="checkbox" id="toggle" name="toggle" /> */}
<div class="verticalNav">
  <ul className="navbar-list" id="menu">
    <Link to={`/`}><li>Home</li></Link>
    <Link to={`/Services`}><li>Services & Treatment</li></Link>
    <Link to={`/MeetOurTeam`}><li>Meet Our Team</li></Link>
    <Link to={`/CaseManagers`}><li>Case Managers</li></Link>
    <Link to={`/Physicians`}><li>Referring Physicians</li></Link>
    <Link to={`/Blog`}><li>Blog</li></Link>
    <Link to={`/ContactUs`}><li>Contact Us</li></Link>

  </ul>
  </div>   
</nav>

          
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/Services' render={() => <Services/>} />
        <Route exact path='/MeetOurTeam' render={() => <Team/>} />
        <Route exact path='/CaseManagers' render={() => <CM/>} />
        <Route exact path='/Physicians' render={() => <Physicians/>} />
        <Route exact path='/Blog' render={() => <Blog/>} />
        <Route exact path='/ContactUs' render={() => <Contact/>} />
      </Switch>
      <footer>
        <p>© 2020 Encompass HealthCare & Wound Medicine | Designed by Jada Woody</p>
        <p>2300 Haggerty Road, Suite 1190 | West Bloomfield, Michigan 48323 | (248)624-9800</p>
      </footer>
    </div>
  );
}

export default App;