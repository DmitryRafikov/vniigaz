import AccordionTableRow from './AccordionTableRow';
import CommonTableRow from './CommonTableRow';
import React from 'react';

export default TableBody = (mainData, extendData) => { 

    return (
        <tbody>
            {extendData != null ?
            <AccordionTableRow mainData = {mainData} extendData = {extendData}/>:
            <CommonTableRow data={mainData}/>}    
            <Modal.Footer>            
                <Button variant="outline-success">Добавить</Button>
            </Modal.Footer>        
        </tbody>       
    );
}