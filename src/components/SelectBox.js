import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './SelectBox.scss';

export default function SelectionBox(props) {

    // const [selected, setSelected] = useState((props.placeholder !== undefined && props.items.length === 0) ? props.placeholder : (props.items !== undefined) ? props.items[0].caption : ' ');
    const [selected, setSelected] = useState(null);

    const toggleList = () => {
        let dropdownList = document.getElementById(props.id + "_dropdown_list");
        if (dropdownList.style.display === 'none') {
            dropdownList.style.display = 'block';
        }
        else {
            dropdownList.style.display = 'none';
        }
    }

    useEffect(() => {
        if(props.resetSelection){
            setSelected(null)
        }
        
        if(props.items.length === 0){
            setSelected(0)
        }
    },[selected,props.resetSelection,props.items])

    const setSelectedItem = (item) => {
        document.getElementById(props.id + "_dropdown_list").style.display = 'none';
        setSelected({caption:item.target.id.split('####')[1],value:item.target.id.split('####')[0]});
        props.setResetSelection(false);
    }

    return (
        <div className="dropdown" id={"dropdown_" + props.id}>
            <div className="dropdown-box" onClick={toggleList}>
            <span className="dropdown-box-text">{(selected === null) ? props.placeholder : (selected === 0) ? 'No points' : selected.caption}</span>
                <span className="dropdown-box-arrow"><FontAwesomeIcon icon="angle-down" /></span>
            </div>
            <div className="dropdown-list" id={props.id + "_dropdown_list"} style={{ display: "none" }}>
                <ul className="dropdown-list-holder">
                    {
                        (props.items !== undefined) ?
                        (props.items.map((item,i) => {
                            return <li key={i} className="dropdown-list-item" id={item.value+ '####' + item.caption} onClick={setSelectedItem}>{item.caption}</li>    
                        })) : <li></li>
                    }
                </ul>
            </div>
            <input type="hidden" id={props.id} value={(selected === null || selected === 0) ? '' : selected.value} />
        </div>
    )
}