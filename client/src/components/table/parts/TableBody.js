import AccordionTableRow from './AccordionTableRow';
import CommonTableRow from './CommonTableRow';
import React from 'react';
import  {Container, Button, Modal} from 'react-bootstrap';

const TableBody = (props) => {
    const styles = "w-100 my-3";
    return (
        
        <Container className='p-0 m-0'>
            {props.extendData != null ?
            <AccordionTableRow 
                mainData = {props.mainData} 
                extendData = {props.extendData}
            />:
            <CommonTableRow 
                className={styles} 
                data={props.mainData}
            />}    
            <Modal.Footer className={styles} >            
                <Button variant="outline-success">Добавить</Button>
            </Modal.Footer>        
        </Container>       
    );
}
export default TableBody;