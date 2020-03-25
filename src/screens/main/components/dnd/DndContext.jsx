import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import CardList from './CardList';
import CardSlot from './CardSlot';
import clearList from '../../helpers/clearList';

const DndContext = (props) => {

  return (
    <DragDropContext
      onDragEnd={props.onDragEnd}>

      <div className='days-container'
        style={{display:"flex"}}
      >
      {Object.entries(props.columns).map(([columnId, column]) => {
          return (
            <div
            className='column-container'
            key={columnId}
            >
              <div className='column-name-container'>
                <h4 className='column-name' >{column.name}</h4>
                <button onClick={()=>clearList(columnId, props.columns, props.setColumns)} type="button" className="delete-list btn btn-danger">
                Clear
                </button>
              </div>
              <div className='outside-column'>
                <CardSlot 
                key={columnId}
                dayId={columnId} 
                column={column}
                columns={props.columns}
                setColumns={props.setColumns}
                />
              </div>
            </div>
          );
      })}
      </div>
        <div
        className='column-container activity-list'
        >
          <h2>{props.mentors['list'].name}</h2>
          <div className='outside-column'>
            <CardList 
            droppableId='list'
            key={'list'}
            mentors={props.mentors['list'].items}
            setMentors={props.setMentors}
            columns={props.columns}
            setColumns={props.setColumns}
            />
          </div>
        </div>
      
   </DragDropContext>
  );
};

export default DndContext;


// <a href={`#${index+1}`} onClick={(e)=>{

//   if (index<Object.keys(columns).length-1){
//     setIndex(index+1)
//     console.log(index+1)
//   }
// }}>right</a>