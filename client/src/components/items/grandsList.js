import TableCell from '../TableCell';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';


const GrandsList = ({grands}) => {
  let alignItems = "d-flex justify-content-center align-items-center";
  return (
    <Container style={{border: "1px solid black"}}>
        <Row>
            {
                grands.fields.map((element) => {
                    return(<Col className={alignItems} style={{border: "1px solid black"}}> {element}</Col>)
                })
            }            
        </Row>
        {grands.items.map((item, index) => { 
            return (
                <Row key={item.id}>
                    <Col className={alignItems} style={{border: "1px solid black"}}> {index + 1} </Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.competitionName}/> </Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.topic}/> </Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.participantQuantity}/> </Col>
                    <Col className={alignItems} style={{border: "1px solid black"}}><TableCell content={item.winnersQuantity}/> </Col>
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

export default GrandsList;