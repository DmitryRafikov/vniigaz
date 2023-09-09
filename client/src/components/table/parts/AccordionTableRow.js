import TableCell from "./input/TableCell";
import React from "react";
import {Accordion, Col} from "react-bootstrap";
import ExtendInputCell from "./input/ExtendInputCell";

const AccordionTableRow = (props) => { 
    const main = Object.values(props.mainData);
    const extend = Object.values(props.extendData);
    return (        
        <Accordion className="transparent m-0 p-0">
            {main.map((mainItem, index)=>(
                <Accordion.Item className={createStyles(index+1)} eventKey={index}>
                    <Accordion.Header className="d-flex justify-content-between">
                        {
                        Object.values(mainItem).map((value) => (
                            <Col key={value.id}><TableCell className="m-10">{value}</TableCell></Col>
                        ))}
                    </Accordion.Header>
                    <Accordion.Body>
                        {extend.filter((item)=>{return item.eventID === mainItem.id})
                                .map((extendItem)=>(
                                    <ExtendInputCell 
                                        label={extendItem.dataName}
                                        value={extendItem.data}
                                    />
                                ))
                        }
                    </Accordion.Body>            
                </Accordion.Item>            
            ))}
        </Accordion>
    );
}
const createStyles = (value) =>{
    const style = "transparent rounded mt-3 p-2";
    let str
    if(value%2===0)
        str=" odd";
    else
        str=" even";
    return style + str;
}

export default AccordionTableRow