import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Main from './screens/main/components/Main'
import Profile from './screens/profile/components/Profile'
// import Employees from './screens/employees/components/Employees'
import Dashboard from './screens/dashboard/components/Dashboard'
import Login from './screens/login/components/Login'
import SignUp from './screens/signup/components/SignUp'
import Home from './screens/home/components/Home'
import Employees from './screens/employees/components/Employees';

function App() {

  let cookieAsObject = Object.fromEntries(
    document.cookie.split('; ')
      .map(x => x.split('='))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  ); // parse cookie
  let userObject = JSON.parse(cookieAsObject.user || 'null'); // get user object from parsed cookie

  const [user, setUser] = useState(userObject);

  console.log(user)
  return (
    <Router>
      <Switch>
        <Route path="/main/:userType" exact render={routeProps=> <Main 
          {...routeProps} user={user} setUser={setUser}
        /> } />
        {/*<Route path="/employees/" render={routeProps=> <Profile/> } /> */}
        <Route path="/dashboard" render={routeProps=> <Dashboard 
          {...routeProps} user={user}
        /> } />
        <Route path="/login" render={routeProps=> <Login
          {...routeProps} user={user} setUser={setUser}
        /> } />
        <Route path="/signup" render={routeProps=> <SignUp
          {...routeProps} user={user} setUser={setUser}
        /> } />
        <Route path="/employees" render={routeProps=> <Employees 
          {...routeProps} user={user} setUser={setUser}
        /> } />
        <Route path="/employees/:employeeId" exact render={routeProps=> <Profile 
          {...routeProps} user={user} setUser={setUser}
        /> } />
        <Route path="/" render={routeProps=> <Home 
          {...routeProps} user={user} setUser={setUser}
        /> } />
      </Switch>
    </Router>
  )
}

export default App;
