import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RouteViewer.scss';

export default function RouteViewer(props){
    return(
        <div style={{display:"inline-block"}}>
            <div className="route-viewer-point">
            <span className="route-viewer-point-text">{props.routeNumber}</span>
            </div>
            {
                (props.nextRoutePresent !== undefined && props.nextRoutePresent === true) ?
                <FontAwesomeIcon className="route-viewer-arrow" icon="arrow-right"/> : ''
            } 
        </div>
    )
}