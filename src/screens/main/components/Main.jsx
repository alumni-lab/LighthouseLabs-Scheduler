import React from 'react';
import Header from '../../../general/Header/Header';
import WeekCalendar from 'react-week-calendar';
 
import 'react-week-calendar/dist/style.css'
import moment from 'moment';

const Main = (props) => {
  return (
    <div>
      {/* <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      /> */}

      <WeekCalendar
        firstDay={moment('2019W10')}
        numberOfDays={7}
        scaleHeaderTitle={'LHL Scheduler'}
        scaleFormat= {'h:mm'}
        startTime= {moment({ h: 10, m: 0 })}
        endTime={moment({ h: 22, m: 0 })}
        scaleUnit={60}
        cellHeight={40}
        eventSpacing={30}
      />
      
      
    </div>
  );
};

export default Main;