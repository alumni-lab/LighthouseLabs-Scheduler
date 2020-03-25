import React,{useState} from 'react';
import Header from '../../../general/Header/Header';
import moment from 'moment';

import getColumns from '../helpers/getColumns';
import getMentors from '../helpers/getMentors';
import DndContext from './dnd/DndContext';
import onDragEnd from '../helpers/onDragEnd';

const Main = (props) => {

  const [mentors, setMentors] = useState(getMentors());
  const [columns, setColumns] = useState(getColumns());

  return (
    <div>
     {/* <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      /> */}
      <div className='dnd-context'
        style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
      }}>
        <DndContext
          onDragEnd={result => onDragEnd(result, columns, setColumns, mentors,setMentors)}
          columns={columns}
          setColumns={setColumns}
          mentors={mentors}
          setMentors={setMentors}
        />
      </div>
    </div>
  );
};

export default Main;


  // console.log(moment().startOf('month').format('MMM D, YY'))
  // const start = moment('2020W01').startOf('week')
  // const end = moment('2020W01').endOf('week')
  // console.log(start.format('MMM D, YY'));
  // console.log(end);
  // console.log(start.add('d',1).format('MMM D, YY'))
