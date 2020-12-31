import React from "react";
import CardITem from "./CardITem";
import "./Cards.css";
import img9 from "../images/img9.jpg";
import img8 from "../images/img8.jpg";
import img4 from "../images/img4.jpg";

function Cards() {
 return (
  <div className="cards">
   <h1 className="">checkout these epic destinations!</h1>
   <div className="cards_container">
    <div className="cards_wrapper">
     <ul className="cards_items">
      <CardITem
      className="realcards"
       src={img9}
       text="Explore the hidden waterfall deep inside the Amazon jungle"
       label="Adventure"
       path="/services"
      />

      <CardITem
      className="realcards"
       src={img4}
       text="Experience football on top himalayan mountains"
       label="Adventure"
       path="/services"
      />
     </ul>

     <ul className="cards_items">
      <CardITem
      className="realcards"
       src={img8}
       text="Ride through the sahara desert on a Guided camel tour"
       label="Adventure"
       path="/services"
      />

      <CardITem
      className="realcards"
       src={img9}
       text="Explore the hidden waterfall deep inside the Amazon jungle"
       label="Adventure"
       path="/services"
      />
     </ul>

    </div>
   </div>
  </div>
 );
}

export default Cards;
