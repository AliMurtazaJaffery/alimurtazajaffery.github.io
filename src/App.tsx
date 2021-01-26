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
import projectDescription from "./Components/projectDescription"

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
            <Route path="/Projects/studentbase" exact component={projectDescription}/>
            <Route path="/Projects/weatherapp" exact component={projectDescription}/>
            <Route path="/Projects/bigtwo" exact component={projectDescription}/>
            <Route path="/Projects/notakto" exact component={projectDescription}/>

            <Route path="/Work" exact component={Work}/>
          </Switch>
        </Router>
    </>
  );
}

