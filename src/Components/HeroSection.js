import React from "react";
import Button from './Button'
import './HeroSection.css';
import '../App.css';

const HeroSection = () => {
 return (
  <div className="hero_container">
   <video src="/videos.video-2.mp4" autoPlay loop muted />
   <h1> Adventure Awaits</h1>
   <p>What are you waiting for?</p>
   <div className="hero_btns">
    <Button
     className="btns"
     buttonStyle="btn--outline"
     buttonSize="btn--large"
    >
     Get Started
    </Button>

    <Button
     className="btns"
     buttonStyle="btn--primary"
     buttonSize="btn--large"
    >
     Watch Trailor <i className="fa fa-play-circle"/>
    </Button>
   </div>
  </div>
 );
};

export default HeroSection;
