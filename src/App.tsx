import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
// "homepage": "https://AliMurtazaJaffery.github.io/alimurtazajaffery.github.io",
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Work from './Pages/Work'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'
import StudentBase from "./Pages/StudentBaseDescription"
import weatherApp from "./Pages/WeatherAppDescription"
import bigTwo from "./Pages/BigTwoDescription"
import forum from "./Pages/ForumDescription"
import notakto from "./Pages/NotaktoDescription"
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-197709334-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <>
      <Header/>
      <Contact/>
      <Navbar/>
      <Router basename={"/"}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" exact component={Projects}/>
            <Route path="/Projects/studentbase" exact component={StudentBase}/>
            <Route path="/Projects/weatherapp" exact component={weatherApp}/>
            <Route path="/Projects/bigtwo" exact component={bigTwo}/>
            <Route path="/Projects/notakto" exact component={notakto}/>
            <Route path="/Projects/interactiveforum" component={forum}/> 
            
            <Route path="/Work" exact component={Work}/>
          </Switch>
        </Router>
    </>
  );
}

