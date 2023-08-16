import TableCell from '../TableCell';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';

const ChampionshipsList = ({championships}) => {
  let alignItems = "d-flex justify-content-center align-items-center";
  return (
    <Container style={{border: "1px solid black"}}>
        <Row>
            {
                championships.fields.map((element) => {
                    return (<Col className={alignItems} style={{border: "1px solid black"}}>{element}</Col>)
                })
            }            
        </Row>
        {championships.items.map((item, index) => { 
            return (
                <Row key={item.id}>
                    <Col className={alignItems} style={{border: "1px solid black"}} >{index + 1}</Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.participantFullName}/></Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.department}/></Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.post}/></Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.isWinner}/></Col>
                </Row>
            )}
        )}
        <Modal.Footer>            
                <Button variant="outline-success">Добавить</Button>
                <Button variant="outline-danger" >Удалить</Button>
        </Modal.Footer>
    </Container>
  );
}

export default ChampionshipsList;