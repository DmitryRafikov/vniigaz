import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App = () =>
{
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}

export default App; 