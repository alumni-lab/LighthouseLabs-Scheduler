import React from 'react';
import Header from '../../../general/Header/Header';

const Profile = (props) => {
  return (
    <div>
      <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      Profile
    </div>
  );
};

export default Profile;