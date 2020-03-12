import React from 'react';
import Header from '../../../general/Header/Header';

import { Link, useHistory } from "react-router-dom"

const Home = (props) => {
  const history = useHistory();
  if (!props.user) {
    history.push("/login");
  }

  const userType='admin'
  return (
    <div style={{ height:'100vh', width:'100vw' ,display:'flex', justifyContent:'center',alignItems:'center'}} >
      <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>

        <Link to={`/main/${userType}`}>Schedule</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/employees'>All employees</Link>
        {!props.user||!props.user.is_admin? 
        null
        :
        <Link to='/signup'>Create New User</Link>
        }
      
      </div>
    </div>
  );
};

export default Home;