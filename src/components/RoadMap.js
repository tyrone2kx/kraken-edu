import React from 'react';
import RoadMaps from './RoadMaps';

const RoadMap = () => {

    return (
        <>
            <div className="roadMap">
                <div className="roadMap__header">
                    <p className="roadMap__text">Roadmap</p>
                    <a href="#" className="roadMap__link"> View </a>
                </div>

                <RoadMaps color="#FF9600" title="Planned" amount={2} />
                <RoadMaps color="purple" title="In Progress" amount={3} />
                <RoadMaps color="green" title="Live" amount={1} />

            </div>
        </>
    )
}


export default RoadMap;