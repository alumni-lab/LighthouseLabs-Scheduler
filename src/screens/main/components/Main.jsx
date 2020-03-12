import React from 'react';
import Header from '../../../general/Header/Header';
const Main = (props) => {
  return (
    <div>
      <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      
      
    </div>
  );
};

export default Main;