import './App.css';
import React, { useEffect, useContext, useState, Fragment } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LandingPage from './components/home_page/LandingPage'
import startHome from './components/startPage/MainPage'
const App=()=>(
    <Router>
        <Switch>
            <Route exact path='/' component={startHome} />
            <Route exact path='/user/:name' component={LandingPage} />
        </Switch>
    </Router>
)
export default App;
