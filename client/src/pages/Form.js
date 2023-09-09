import {grands, championships, events, eventsData} from '../utils/data';
import TableOutput from '../components/table/TableOutput'; 
import OffcanvasMenu from '../components/table/parts/OffcanvasMenu';
import TableName from '../components/table/parts/TableName';
import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux'
import {Container, Tab } from 'react-bootstrap';
import {setPageTitle } from '../store/ui/ui.slice';

const Form = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    //Задаём загловок для страницы
    dispatch(setPageTitle('Название страницы'))
  }, [])

  return (
    <Container>   
        <TableName />     
        <Tab.Container className="mt-4">
            <Tab.Content className='text-center'>
                <Tab.Pane >
                  <TableOutput 
                    tableHeaders={events.fields} 
                    mainTableData={events.items}
                    extendTableData={eventsData.items}
                  /> 
                </Tab.Pane>
                <Tab.Pane >
                  <TableOutput 
                    tableHeaders={grands.fields} 
                    mainTableData={grands.items}
                  /> 
                </Tab.Pane>
                <Tab.Pane >
                  <TableOutput 
                    tableHeaders={championships.fields} 
                    mainTableData={championships.items}
                  /> 
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    </Container>
  );
};

export default Form;