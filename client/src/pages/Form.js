import ChampionshipsList from '../components/items/championshipsList';
import GrandsList from '../components/items/grandsList';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

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
  return (
    <Tab.Container defaultActiveKey="first" className="mt-4">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Гранты</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Чемпионат</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"><GrandsList grands = {grands}/> </Tab.Pane>
            <Tab.Pane eventKey="second"><ChampionshipsList championships = {championships}/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Form;