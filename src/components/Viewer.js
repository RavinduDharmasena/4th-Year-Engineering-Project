import React, { useState, useEffect } from 'react';
import Button from './Button';
import RouteViewer from './RouteViewer';
import SelectBox from './SelectBox';
import Table from './Table';
import './viewer.scss';
import MapViewer from './MapViewer';
import Popup from './Popup';

export default function Viewer() {

    const [resetSelection,setResetSelection] = useState(true)
    const [rowData, setRowData] = useState([])
    const [noOfRoutes, setNoOfRoutes] = useState(0)
    const [items, setItems] = useState([
        {
            caption: "1",
            value: "1"
        },
        {
            caption: "2",
            value: "2"
        },
        {
            caption: "3",
            value: "3"
        },
        {
            caption: "4",
            value: "4"
        }
    ])
    const [deletedItems, setDeletedItems] = useState([])
    const [points, setPoints] = useState([
        {
            caption: "1",
            top: "19.5rem",
            left: "0rem",
            selected:false
        },
        {
            caption: "2",
            top: "9rem",
            left: "8.6rem",
            selected:false
        },
        {
            caption: "3",
            top: "7rem",
            left: "18rem",
            selected:false
        },
        {
            caption: "4",
            top: "16rem",
            left: "18rem",
            selected:false
        }
    ])
    useEffect(() => {
        setNoOfRoutes(document.getElementById('table_1').rows.length)
    }, [noOfRoutes])


    const addRow = () => {
        setResetSelection(false)
        let selectedValue = document.getElementById('dropdown_1').value
        if (selectedValue === '') {
            document.getElementById('popup').className="popup-box popup-box-fadeUp"
            return;
        }

        let tableRow = rowData
        tableRow.push({ pointNumber: selectedValue })
        let selectionRoutes = items;

        let selectionRouteIndex = findIndex(selectedValue.toString(), selectionRoutes, 'value');
        selectionRoutes.splice(selectionRouteIndex, 1)
        setItems(selectionRoutes)
        
        let pointsArr = points
        let pointIndex = findIndex(selectedValue.toString(),pointsArr,'caption')
        pointsArr[pointIndex].selected = true
        setPoints(pointsArr)


        let deletedItemsArr = deletedItems
        deletedItemsArr.push(selectionRoutes[selectionRouteIndex])
        // setClearSelection(true)
        setDeletedItems(deletedItemsArr)
        setRowData(tableRow)
        setNoOfRoutes(noOfRoutes + 1)
        setResetSelection(true)
    }



    const findIndex = (value, arr, searchAttr) => {
        let deleteIndex = -1
        arr.map((item, i) => {
            if (item[searchAttr] === value) {
                deleteIndex = i
            }
            return deleteIndex
        })

        return deleteIndex
    }

    const deleteElement = (id) => {
        let deleteIndex = findIndex(id.split('_')[1].toString(), rowData, 'pointNumber');
        let deletedObj = rowData.splice(deleteIndex, 1)[0]
        
        let pointIndex = findIndex(id.split('_')[1].toString(), points, 'caption');
        let pointsArr = points
        pointsArr[pointIndex].selected = false
        setPoints(pointsArr)

        let itemArr = items
        itemArr.push({ caption: deletedObj.pointNumber, value: deletedObj.pointNumber })
        itemArr.sort()
        setItems(itemArr)

        let deletedItemsArr = deletedItems
        deletedItemsArr.splice(deleteIndex, 1)
        setDeletedItems(deletedItemsArr)
        setNoOfRoutes(noOfRoutes - 1)

    }

    const swapElement = (id, direction) => {
        let index = findIndex(id.split('_')[1].toString(), rowData, 'pointNumber');


        let tempObj = rowData[index]

        if (direction === "up") {
            rowData[index] = rowData[index - 1]
            rowData[index - 1] = tempObj
        }
        else if (direction === "down") {
            rowData[index] = rowData[index + 1]
            rowData[index + 1] = tempObj
        }
        else {

        }

        setNoOfRoutes(0)
    }

    return (
        <div className="viewer">
            <div className="form">
                <div style={{ display: 'inline-block', marginRight: "1rem" }}>
                    <SelectBox placeholder="Please Select An Item" id="dropdown_1" items={items} setResetSelection={setResetSelection} resetSelection={resetSelection}/>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <Button color="green" text="Insert Waypoints" clickFunction={addRow} />
                </div>
            </div>
            <Table id="table_1" data={rowData} deleteElement={deleteElement} changeElement={swapElement} />
            <div className="route-viewer">
                <h3>Route Viewer</h3>
                {
                    (rowData.length !== 0) ?
                        rowData.map((item, i) => {
                            if (i === 0) {
                                return <RouteViewer key={i} start={true} finish={false} nextRoutePresent={true} routeNumber={item.pointNumber} />
                            }
                            else if (i === (rowData.length - 1)) {
                                return <RouteViewer key={i} start={false} finish={true} nextRoutePresent={false} routeNumber={item.pointNumber} />
                            }
                            else {
                                return <RouteViewer key={i} start={false} finish={false} nextRoutePresent={true} routeNumber={item.pointNumber} />
                            }
                        }) :
                        (<label style={{ marginTop: '.5rem', display: "block" }}>No points selected</label>)
                }
            </div>
            <MapViewer points={points}/>
            <Popup id="popup"/>
        </div>
    )
}