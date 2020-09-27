import React from 'react'
import TableRow from './TableRow'

export default function Table(props) {
    return (
        <table id={props.id} className="table">
            <thead>
                <tr>
                    <th>Way Points</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    (props.data.length !== 0) ? 
                    props.data.map((item, i) => {
                        if(i === 0){
                            return (<TableRow key={i} pointNumber={item.pointNumber} deleteElement={props.deleteElement} changeElement={props.changeElement} swap={"down"}/>)
                        }
                        else if(i === props.data.length - 1){
                            return (<TableRow key={i} pointNumber={item.pointNumber} deleteElement={props.deleteElement} changeElement={props.changeElement} swap={"up"}/>)
                        }
                        else{

                            return (<TableRow key={i} pointNumber={item.pointNumber} deleteElement={props.deleteElement} changeElement={props.changeElement} swap={"updown"}/>)
                        }
                    }) : 
                    (<tr><td style={{textTransform: "uppercase"}} colSpan={2}>No point selected</td></tr>)}
            </tbody>
        </table>
    )
}