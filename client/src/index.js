import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import { createContext } from 'react/cjs/react.production.min';


export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore()
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);