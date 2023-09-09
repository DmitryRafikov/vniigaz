import React from "react";
import {Row, Col} from "react-bootstrap";
import TableCell from "./input/TableCell";

const CommonTableRow = (props) => { 
    const entries = Object.values(props.data);
    return (
        entries.map((item, index)=>(
            <Row className={createStyles(index+1)}>
                {Object.values(item).map((value) => (
                    <Col key={value.id}><TableCell className="m-10">{value}</TableCell></Col>
                ))}
            </Row>
        ))
    );
}

const createStyles = (value) =>{
    const style = "d-flex justify-content-between rounded mt-3 p-2";
    let str
    if(value%2===0)
        str=" odd";
    else
        str=" even";
    return style + str;
}

export default CommonTableRow;