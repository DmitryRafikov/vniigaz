import ChampionshipsList from '../components/items/championshipsList';
import GrandsList from '../components/items/grandsList';
import OffcanvasComponent from '../components/table/OffcanvasComponent';
import { useState } from 'react';
import { Container, Button, Tab } from 'react-bootstrap';


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
    <Container>
        <Button variant="primary" onClick={handleShow}>
        Launch
        </Button>      
        <OffcanvasComponent />
        <Tab.Container defaultActiveKey="first" className="mt-4">
            <Tab.Content>
                <Tab.Pane eventKey="first"><GrandsList grands={grands}/> </Tab.Pane>
                <Tab.Pane eventKey="second"><ChampionshipsList championships={championships}/></Tab.Pane>
            </Tab.Content>
        </Tab.Container>

    </Container>
  );
}

export default Form;