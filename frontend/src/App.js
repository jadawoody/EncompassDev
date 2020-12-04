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
import fbIcon from './images/iconRound1.jpg';
import linkIcon from './images/iconRound2.jpg';
import ytIcon from './images/iconRound3.jpg';
import emailicon from './images/iconRound4 (1).jpg';
import BlogDetails from './components/BlogDetails';
import CaroPractice from './components/CaroPractice';

function App(props) {
  return (
    <div>

    <nav id="regularMenu" role="navigation">
      <div id="nav">
      <label for="toggle" id="burgerBars">&#9776;</label>
        <input type="checkbox" id="toggle"/>
        <div className="menu">
        
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
      </div>
    </nav>
    
          
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/Services' render={() => <Services/>} />
        <Route exact path='/MeetOurTeam' render={() => <Team/>} />
        <Route exact path='/CaseManagers' render={() => <CM/>} />
        <Route exact path='/Physicians' render={() => <Physicians/>} />
        <Route exact path='/Blog' render={(props) => <Blog {...props} />} />
        <Route exact path='/ContactUs' render={() => <Contact/>} />
        <Route exact path='/blog/:id' render={(props) => <BlogDetails {...props}/> } />
        <Route exact path='/CaroPractice' render={() => <CaroPractice /> } />
      </Switch>
      <footer>
        <div>
          <a href={`https://www.facebook.com/EncompassHealthCare/`} target="_blank" ><img src={fbIcon} alt="" id="footerImg"/></a>
          <a href={`https://www.linkedin.com/company/encompasshealthcare`} target="_blank" ><img src={linkIcon} alt="" id="footerImg"/></a>
          <a href={`https://www.youtube.com/encompasshealthcare`} target="_blank" ><img src={ytIcon} alt="" id="footerImg"/></a>
          <a href={`https://mailchi.mp/encompasshealthcare/joinus`} target="_blank" ><img src={emailicon} alt="" id="footerImg"/></a>
        </div>
        <p>© 2020 Encompass HealthCare & Wound Medicine | Designed by Jada Woody</p>
        <p>2300 Haggerty Road, Suite 1190 | West Bloomfield, Michigan 48323 | <a href="tel:+2486249800" id="phoneCall">(248)624-9800</a></p>
      </footer>
    </div>
    
  );
}

export default App;