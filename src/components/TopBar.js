import React from 'react';
import { Icon } from 'react-icons-kit';
import { basic_lightbulb } from 'react-icons-kit/linea/basic_lightbulb'
import { lightbulb } from 'react-icons-kit/typicons/lightbulb'
import { plus } from 'react-icons-kit/icomoon/plus'



const TopBar = () => {

    return (
        <div className="topBar">
          <div className="topBar__left">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon icon={basic_lightbulb} style={{ color: "#FFF" }} size={16} />
              <p className="topBar__suggestions">6 Suggestions</p>
            </div>

            <div className="topBar__sort" style={{ display: 'flex', alignItems: 'center' }}>
              <p className="topBar__sort_text">Sort By : </p>
              <select className="topBar__select">
                <option>Most Upvotes</option>
                <option>Most Viewed</option>
              </select>
            </div>
          </div>

          <div>
            <button className="topBar__button"> <Icon icon={plus} size={8} style={{ color: '#FFF' }} /> Add Feedback</button>
          </div>
        </div>
    )
}


export default TopBar;