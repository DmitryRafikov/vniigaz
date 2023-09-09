import { tabsContext } from '../../../index';
import React from 'react';
import { useState, useContext } from 'react';
import {Offcanvas, Col, Button, Nav} from 'react-bootstrap';

const OffcanvasMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const {tab} = useContext(null);
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
        Launch
        </Button>          
        <Offcanvas show={show} onHide={handleClose}>   
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Col className='d-flex flex-column'>
                    {
                        Object.entries(tab.tabsNames).map((item)=>{
                            return(
                                <Nav.Item onClick={() => {tab.currentState = item[1]}}>
                                    <Nav.Link  
                                        eventKey={item[1]}
                                        className='text-start mt-2 mw-70'
                                    >
                                        {item[1]}
                                    </Nav.Link>
                                </Nav.Item>
                            );
                        })
                    }
                </Col>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
};





export default OffcanvasMenu;