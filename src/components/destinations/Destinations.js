import React from 'react';
import "./DestinationsStyles.css";

import borabora from "../../assets/borabora.jpg";
import borabora2 from "../../assets/borabora2.jpg";
import keywest from "../../assets/keywest.jpg";
import maldives from "../../assets/maldives.jpg";
import maldives2 from "../../assets/maldives2.jpg";


function Destinations() {
  return (
    <div name="destinations" className='destinations'>
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caribbean's Best Beaches!</p>
        <div className="img-container">
          <img className='span-3 image-grid-row-2' src={borabora} alt="beach" />
          <img src={borabora2} alt="beach2" />
          <img src={keywest} alt="beach3" />
          <img src={maldives} alt="beach4" />
          <img src={maldives2} alt="beach5" />
        </div>
      </div>
    </div>
  )
}

export default Destinations
