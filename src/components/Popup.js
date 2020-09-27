import React from 'react'
import Button from './Button'
import './Popup.scss'
import PopupHeader from './PopupHeader'

export default function Popup(props) {
    const closePopup = () => {
        let popup = document.getElementById(props.id)
        popup.className="popup-box popup-box-fadeDown"
    }

    return (
        <div>
            {/* <div className="popup-background"></div> */}
            <div id={props.id} className="popup-box">
                <div className="popup-header">
                    <PopupHeader id={props.id} closePopup={closePopup}/>
                </div>
                <div className="popup-body">
                    Please Select a Point
                </div>
                <div className="popup-footer">
                    <Button color="primary" text="Close" clickFunction={closePopup}/>
                </div>
            </div>
        </div>
    )
}