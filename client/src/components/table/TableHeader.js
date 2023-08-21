import React from 'react';
import Table from 'react-bootstrap/Table';

export default TableHeader = (headers) => {
    return (
        <thead>
            <tr>
                {headers.map(column => {
                    return <th>{column}</th>
                })}
            </tr>
        </thead>
    );
};