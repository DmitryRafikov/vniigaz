import TableHeader from './TableHeader';
import TableBody from './TableBody';
import React from 'react';
import Table from 'react-bootstrap/Table';

export default TableOutput = (tableHeaders, mainTableData, extendTableData) => {
    return (
        <Table striped >
            <TableHeader headers = {tableHeaders}/>
            <TableBody mainData={mainTableData} extendData={extendTableData}/>
        </Table>
    );
}