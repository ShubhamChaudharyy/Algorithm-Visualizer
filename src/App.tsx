import './App.css';
import React, { useEffect, useContext, useState, Fragment } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import startHome from './components/startPage/MainPage'
const App=()=>(
    <Router>
        <Switch>
            <Route exact path='/' component={startHome} />
        </Switch>
    </Router>
)
export default App;
