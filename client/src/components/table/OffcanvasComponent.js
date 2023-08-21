import {Offcanvas, Nav, Col} from 'react-bootstrap';

export default OffcanvasComponent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Col>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Гранты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Чемпионат</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Offcanvas.Body>
        </Offcanvas>
    );
}