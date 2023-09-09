import React from 'react';
import {Row, Col} from "react-bootstrap";

const TableHeader = (props) => {
    return (        
        <Row className="d-flex justify-content-between align-items-center mt-3 p-2 rounded even">            
                {props.headers.map((column) => 
                     <Col key={column}>{column}</Col>
                )}
        </Row>
    );
};

export default TableHeader;