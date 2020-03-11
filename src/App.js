import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Main from './screens/main/components/Main'
import Profile from './screens/profile/components/Profile'
import Dashboard from './screens/dashboard/components/Dashboard'
import Login from './screens/login/components/Login'
import SignUp from './screens/signup/components/SignUp'
import Home from './screens/home/components/Home'
import EmployeeList from './screens/employees/components/EmployeeList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main/:userType" render={routeProps=> <Main/> } />
        <Route path="/profile/:userId" render={routeProps=> <Profile/> } />
        <Route path="/dashboard" render={routeProps=> <Dashboard/> } />
        <Route path="/login" render={routeProps=> <Login/> } />
        <Route path="/signup" render={routeProps=> <SignUp/> } />
        <Route path="/employees" render={routeProps=> <EmployeeList /> } />
        <Route path="/" render={routeProps=> <Home/> } />
      </Switch>
    </Router>
  )
}

export default App;
