import './App.css';
import React from 'react';
import { Header } from './components/header/header';

import { userDate } from './components/userData/userData';

import { BrowserRouter as Router, Route } from "react-router-dom";



export function App() {

  return (
    <div className="app">
      <Header />
      <Router>
        <Route path="/" component={userDate} />
      </Router>
    </div>
  );
}