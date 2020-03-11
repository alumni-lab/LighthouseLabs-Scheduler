import React from 'react';
import Header from '../../../general/Header/Header';
import Modal from '../../../general/Modal/Modal';
import { Link, useHistory } from "react-router-dom"

const Home = () => {
  const userType='admin'
  return (
    <div style={{ height:'100vh', width:'100vw' ,display:'flex', justifyContent:'center',alignItems:'center'}} >
      <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
      />
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>

        <Link to={`/main/${userType}`}>Schedule</Link>
        <Link to='/dashboard'>Dashboard</Link>
        {userType==='admin'?
        <Link to='/signup'>Create New User</Link>
        :
        null
        }
      </div>
    </div>
  );
};

export default Home;