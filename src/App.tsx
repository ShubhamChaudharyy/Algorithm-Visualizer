import './App.css';
import React, { useEffect, useContext, useState, Fragment } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LandingPage from './components/home_page/LandingPage'
import ActivityOverview from './components/userHandle/ActivityOverview'
const App=()=>(
    <Router>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/user/:name' component={ActivityOverview} />
        </Switch>
    </Router>
)
export default App;
