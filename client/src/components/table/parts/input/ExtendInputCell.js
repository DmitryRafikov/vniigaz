import React from "react";
import {InputGroup, Form} from "react-bootstrap";

const ExtendInputCell = (props) => {
    const label = props.label;
    const value = props.value;
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
                {label}
            </InputGroup.Text>
            <Form.Control
                aria-label={value}
                aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
    );
};

export default ExtendInputCell;