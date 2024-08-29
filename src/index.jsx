import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import UserConnected from './pages/UserConnected';
import LoginReducer from './redux/reducers/login.reducer';

// REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        login: LoginReducer,
    },
    devTools: true,
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/UserConnected" element={<UserConnected />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    </React.StrictMode>
);
