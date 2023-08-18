import ChampionshipsList from '../components/items/championshipsList';
import GrandsList from '../components/items/grandsList';
import { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { Container, Button, Offcanvas } from 'react-bootstrap';


const grands = {
fields: ["ID", "Наименование конкурса", "Тема работы", "Число участников", "Количество победителей"],
items: [
{ id: '1', competitionName: 'grand', topic: 'title', participantQuantity: '23', winnersQuantity: '1'},
{ id: '2', competitionName: 'grand', topic: 'title', participantQuantity: '23', winnersQuantity: '1'},
{ id: '3', competitionName: 'grand', topic: 'title', participantQuantity: '23', winnersQuantity: '1'},
]};
const championships = {
  fields: ["ID", "ФИО участника", "Подразделение", "Должность", "Победитель"],
  items: [
  { id: '1', participantFullName: 'champ', department: 'title', post: '23', isWinner: 'true'},
  { id: '2', participantFullName: 'champ', department: 'title', post: '23', isWinner: 'false'},
  { id: '3', participantFullName: 'champ', department: 'title', post: '23', isWinner: 'false'},
  ]
};

const Form = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
        <Button variant="primary" onClick={handleShow}>
        Launch
        </Button>      
      
        <Tab.Container defaultActiveKey="first" className="mt-4">
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
            <Tab.Content>
                <Tab.Pane eventKey="first"><GrandsList grands={grands}/> </Tab.Pane>
                <Tab.Pane eventKey="second"><ChampionshipsList championships={championships}/></Tab.Pane>
            </Tab.Content>
        </Tab.Container>

    </Container>
  );
}

export default Form;