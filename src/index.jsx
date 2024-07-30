import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route />
            </Routes>
        </Router>
    </React.StrictMode>
);
