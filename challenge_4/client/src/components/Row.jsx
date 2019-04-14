import React from "react";
import Col from './Col.jsx';

const myDivStyle = {
    backgroundColor: 'lightBlue',
    border: '3px solid black',
    width: '50px',
    height: '50px'
}

const Row = (props) => {
    return (
        <tr style={myDivStyle}>
            {props.row.map((col, i) => <Col key={i} value={col} columnIndex={i} playgame={props.playgame} />)}
        </tr >
    );
}

export default Row;