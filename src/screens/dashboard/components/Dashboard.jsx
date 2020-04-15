import React from 'react';
import Header from '../../../general/Header/Header';

const Dashboard = (props) => {
  return (
    <div>
        <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      Dashboard
    </div>
  );
};

export default Dashboard;