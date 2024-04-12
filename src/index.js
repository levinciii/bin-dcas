import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { PatientsContextProvider } from './context/PatientsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <PatientsContextProvider>
                <style type="text/css">
                {`
                    /* google font */
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');
                    
                    /* layout */
                    :root {
                    --primary: #1aac83;
                    --error: #e7195a;
                    }
                    body {
                    background: #f1f1f1;
                    margin: 0;
                    font-family: "Poppins";
                    }
                    header {
                    background: #fff;
                    }
                    header .container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    }
                    header a {
                    color: #333;
                    text-decoration: none;
                    }
                    .pages{
                    max-width: 1400px;
                    padding: 20px;
                    margin: 0 auto;
                    }
                    
                    /* homepage */
                    .index {
                    display: grid;
                    grid-template-columns: 1.2fr 2fr;
                    gap: 100px;
                    }
                    
                    .patient-details {
                    background: #fff;
                    border-radius: 4px;
                    margin: 20px auto;
                    padding: 20px;
                    position: relative;
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
                    }
                    
                    .patient-details h4 {
                    margin: 0 0 10px 0;
                    font-size: 1.2em;
                    color: var(--primary);
                    }
                    
                    .patient-details p {
                    margin: 0;
                    font-size: 0.9em;
                    color: #555;
                    }
                    
                    .patient-details span {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                    background: #f1f1f1;
                    padding: 6px;
                    border-radius: 50%;
                    color: #333;
                    }
                    
                    .patient-details .tab {
                    display: inline-block;
                    margin-left: 1em;
                    }
                    
                    /* Patients Form */
                    label, input {
                    display: block;
                    }
                    
                    input {
                    padding: 10px;
                    margin-top: 10px;
                    margin-bottom: 20px;
                    width: 100%;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-sizing: border-box;
                    }
                    
                    form button {
                    background: var(--primary);
                    border: 0;
                    color: #fff;
                    padding: 10px;
                    font-family: "Poppins";
                    border-radius: 4px;
                    cursor: pointer;
                    }
                    
                    div.error {
                    padding: 10px;
                    background: #ffefef;
                    border: 1px solid var(--error);
                    color: var(--error);
                    border-radius: 4px;
                    margin: 20px 0;
                    }
                    
                    input.error {
                    border: 1px solid var(--error);
                    }
                    
                    /* navbar */
                    nav {
                    display: flex;
                    align-items: center;
                    }
                    
                    nav a {
                    margin-left: 10px;
                    }
                    
                    nav button {
                    background: #fff;
                    color: var(--primary);
                    border: 2px solid var(--primary);
                    padding: 6px 10px;
                    border-radius: 4px;
                    font-family: "Poppins";
                    cursor: pointer;
                    font-size: 1em;
                    margin-left: 10px;
                    }
                    
                    /* auth forms */
                    form.login {
                    max-width: 400px;
                    margin: 40px auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 4px;
                    }  
                    form.signup {
                    max-width: 650px;
                    margin: 40px auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 4px;
                    }  
                    
                `}
                </style>
            <App/>
        </PatientsContextProvider>
    </AuthContextProvider>
);
