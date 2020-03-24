import React from 'react';
import Header from '../../../general/Header/Header';
import Dnd from './dnd/Dnd'
import moment from 'moment';

const Main = (props) => {

  // console.log(moment().startOf('month').format('MMM D, YY'))
  const start = moment('2020W01').startOf('week')
  const end = moment('2020W01').endOf('week')
  // console.log(start.format('MMM D, YY'));
  // console.log(end);
  // console.log(start.add('d',1).format('MMM D, YY'))

  const weekdayColumns = [];
  const numberOfDays=7
  for (let i = 0; i < numberOfDays; i += 1) {
    const date = moment(start).add(i, 'd').format('dddd (MMM D)');
    console.log(date)
    weekdayColumns.push(date)
  }

  return (
    <div>
      {/* <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      /> */}
    
    <Dnd weekdayColumns={weekdayColumns}/>
      
    </div>
  );
};

export default Main;