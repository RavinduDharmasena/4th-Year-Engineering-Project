import React from 'react';
import Button from './Button';
import RoutePoint from './RoutePoint';
import './TableRow.scss';
import ToolTip from './ToolTip';

export default function TableRow(props) {
    return (
        <tr id={"row_" + props.pointNumber}>
            <td>
                <RoutePoint pointNumber={props.pointNumber} />
            </td>
            <td>
                <ToolTip component={<Button id={'btn_' + props.pointNumber} color="red" icon="trash-alt" clickFunction={props.deleteElement}/>} text="Delete" />
                {(props.swap === "up" || props.swap === "updown") ? <ToolTip component={<Button id={'btn_' + props.pointNumber} color="indigo" icon="arrow-up" clickFunction={props.changeElement} direction="up"/>} text="Move Up"/> : ''}
                {(props.swap === "down" || props.swap === "updown") ? <ToolTip component={<Button id={'btn_' + props.pointNumber} color="purple" icon="arrow-down" clickFunction={props.changeElement} direction="down"/>} text="Move Down"/> : ''}
            </td>
        </tr>

    )
}