import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
// "homepage": "https://AliMurtazaJaffery.github.io/alimurtazajaffery.github.io",
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Work from './Pages/Work'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'

export default function App() {
  return (
    <>
      <Header/>
      <Contact/>
      <Navbar/>
<<<<<<< HEAD
      Hello Bitches 2
=======
    Hello bitches
>>>>>>> f68b9fbded833a50953f11c158d205e66cafe1e9
      <Router basename={"/"}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Work" component={Work}/>
          </Switch>
        </Router>
    </>
  );
}

// export default App;
