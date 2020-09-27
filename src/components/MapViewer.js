import React from 'react';
import './MapViewer.scss';
import mapImage from '../assets/images/map.jpg';

export default function MapViewer(props) {
    return (
        <div className="map-viewer">
            <img src={mapImage} alt="Aerial map" className="aerial-maps" />
            <div className="map-image-overlay">
                {props.points.map((item,i) => {
                    if(item.selected){
                        return <div key={i} className="map-image-overlay-point map-image-overlay-point--red" style={{ top: item.top,left:item.left }}>{item.caption}</div>
                    }
                    else{
                        return <div key={i} className="map-image-overlay-point map-image-overlay-point--green" style={{ top: item.top,left:item.left }}>{item.caption}</div>
                    }
                })}
            </div>
        </div>
    )
}