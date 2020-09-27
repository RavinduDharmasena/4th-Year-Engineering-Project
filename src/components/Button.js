import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props) {
    let btnText = (props.icon === undefined) ? (props.text === undefined) ? 'No icon or text defined' : props.text : <FontAwesomeIcon icon={props.icon}/>

    const onclickFunction = (e) => {
        if(props.clickFunction === undefined){
            console.log('No onclick function is submitted as a prop');
            return;
        }

        props.clickFunction(props.id,props.direction);
    }

    return(
        <button id={props.id} className={"btn btn--" + props.color} onClick={onclickFunction}>
            {btnText}
        </button>
    )
}