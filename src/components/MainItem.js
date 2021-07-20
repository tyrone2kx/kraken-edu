import React from 'react';
import { chevronUp } from 'react-icons-kit/fa/chevronUp'
import { comment } from 'react-icons-kit/fa/comment'
import { Icon } from 'react-icons-kit';
import Tags from './Tags';



const MainItem = ({ title, subtitle, comments, tags, votes }) => {

    return (
        <div className="mainItem">
          <div style={{ display: 'flex' }}>
            <div className="mainItem__left">
              <div className="mainItem__left_wrapper">
                <Icon icon={chevronUp} size={8} style={{padding: '0px', margin: '0px'}} />
                <p>{votes}</p>
              </div>
            </div>
            <div>
              <p className="mainItems__title">{title}</p>
              <p className="mainItems__subtitle">{subtitle}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {tags && tags.map((tag, index) => (
                    <Tags key={index} title={tag} />
                ))}
              </div>
            </div>
          </div>


          <div className="mainItems__right">
            <Icon icon={comment} size={12} className="mainItems__comment" />
            <p className="mainItems__right_text">{comments}</p>
          </div>
        </div>
    )
}


export default MainItem;