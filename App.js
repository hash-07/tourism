import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Home from "./Pages/Home";

function App() {
 return (
  <>
   <Router>
    <Navbar />
    <HeroSection />
    <Switch>
     <Route path="/" exact component={props => <Home{...props}/>} />
    </Switch>
   </Router>
  </>
 );
}

export default App;
