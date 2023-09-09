import React from 'react';
import { useSelector } from 'react-redux';

const TableName = () => {
    const title = useSelector(state => state.ui.pageTitle)
    
    if (!title) return null

    return (      
        <div>Таблица: 
            <span id='table-name'>{ title }</span>
        </div> 
                    
    );
};
export default TableName;