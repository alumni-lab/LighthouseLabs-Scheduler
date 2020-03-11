import React from 'react';
import Header from '/Users/jayseo/lighthouse/lhl-scheduling/lhl-scheduler/src/general/header/Header.js';
import Modal from '/Users/jayseo/lighthouse/lhl-scheduling/lhl-scheduler/src/general/modal/Modal.js';


const Home = () => {
  return (
    <div>
      <Header 
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed 
      />
      <Modal />
      
    </div>
  );
};

export default Home;