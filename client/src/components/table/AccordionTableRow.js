import TableCell from "./TableCell";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default AccordionTableRow = (mainData, extendData) => { 
    const mainData = Object.entries(mainData);
    const extendData = Object.entries(extendData);
    return (
        <Accordion.Item eventKey="0">
            <tr>
                <Accordion.Header>
                    {entries.map(([key, value]) => (
                        <td key={key}> <TableCell>{value}</TableCell></td>
                    ))}
                </Accordion.Header>
                <Accordion.Body>
                    {extendData.map(([key, value]) => (
                        <td key={key}>{value}</td> //переделать на input
                    ))}
                </Accordion.Body>
            </tr>
        </Accordion.Item>
    );
}