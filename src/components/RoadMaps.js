import React from 'react';
import { decode } from 'html-entities';



const RoadMaps = ({ color, title, amount }) => {

    return (
        <div className="roadMap__list">
            <div className="roadMap__content">
              <span style={{ color }} className="roadMap__bullet">{decode('&#9679;', { level: 'html5' })}</span>
              <p className="roadMap__list_text"> {title} </p>
            </div>
            <p className="roadMap__number" >{amount}</p>
          </div>
    )
}


export default RoadMaps;