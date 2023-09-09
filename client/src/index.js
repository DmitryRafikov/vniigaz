import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);