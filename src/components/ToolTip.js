import React from 'react';
import './ToolTip.scss';

export default function ToolTip(props) {
    return (
        <div className="tooltip">
            {props.component}
            <span className="tooltiptext">{props.text}</span>
        </div>
    )
}