import React from 'react';
import './RoutePoint.scss';

export default function RoutePoint(props) {
    return(
        <div className="point-div"><span className="point-div-text">{props.pointNumber}</span></div>
    )
}