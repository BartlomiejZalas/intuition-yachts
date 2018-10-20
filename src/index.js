import React from 'react';
import ReactDOM from 'react-dom';
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Router>
            <App />
        </Router>
    </I18nextProvider>,
    document.getElementById('root')
);

