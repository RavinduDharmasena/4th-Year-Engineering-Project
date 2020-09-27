import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PopupHeader.scss'

export default function PopupHeader(props) {
    return (
        <div>
            <div className="header-text">
                Error
            </div>
            <FontAwesomeIcon icon="times" className="header-close" onClick={props.closePopup}/>
        </div>
    )
}