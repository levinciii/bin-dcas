import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PatientsContextProvider } from './context/PatientsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PatientsContextProvider>
        <App />
    </PatientsContextProvider>
);
