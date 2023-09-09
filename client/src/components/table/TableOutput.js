import TableHeader from './parts/TableHeader';
import TableBody from './parts/TableBody';
import React from 'react';
import Container from 'react-bootstrap/Container';

const TableOutput = (props) => {

    return (
        <Container className='p-0 mx-4'>
            <TableHeader headers = {props.tableHeaders}/>
            <TableBody 
                mainData={props.mainTableData} 
                extendData={props.extendTableData}
            />
        </Container>
    );
}
export default TableOutput;