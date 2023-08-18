import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Context.Provider value={{user: new UserStore()}}>
            <App />
        </Context.Provider>
    </StrictMode>
);