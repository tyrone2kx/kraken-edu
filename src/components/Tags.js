import React from 'react';



const Tags = ({ title, isActive }) => {
    const active = isActive ? "active-tag" : '';
    return (
        <div className={`tag ${active}`}>
            <p className="tag__text">{title}</p>
          </div>
    )
}


export default Tags;