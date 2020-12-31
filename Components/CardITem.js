import React from "react";
import { Link } from "react-router-dom";
import './Cards.css'

function CardITem(props) {
 return (
  <li className="cards_item">
   <Link className="cards_item_link" to={props.path}>
    <figure className="cardsItem_picwrap" data-category={props.label}>
     <img src={props.src} alt="travelImg" className="cardsItem_img" />
    </figure>
    <div className="cardsItem_info">
     <h4 className="cardsItem_text">{props.text}</h4>
    </div>
   </Link>
  </li>
 );
}

export default CardITem;
