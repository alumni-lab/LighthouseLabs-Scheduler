import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import CardList from './CardList';
import clearList from '../../helpers/clearList';
import deleteList from '../../helpers/deleteList'

const DndContext = (props) => {

  return (
    <DragDropContext
      onDragEnd={props.onDragEnd}>

      <div className='days-container'
        style={{display:"flex"}}
      >
      {Object.entries(props.columns).map(([columnId, column], index) => {
        if(columnId !== 'list'){
          return (
            <div
            className='column-container'
            key={columnId}
            >
              <div  className='column-name-container'>
                <h4  className='column-name' >{column.name}</h4>
                {columnId!=='list' && column.name!=='Day 1'? 
                <>
                  <button onClick={()=>clearList(columnId, props.columns, props.setColumns)} type="button" className="delete-list btn btn-danger">
                  Clear
                  </button>
                </>
                :""}
              </div>
              <div id={index} className='outside-column'>
                <CardList 
                droppableId={columnId} 
                key={columnId}
                columnId={columnId}
                column={column}
                columns={props.columns}
                setColumns={props.setColumns}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      </div>
        <div
        className='column-container activity-list'
        >
          <h2>{props.columns['list'].name}</h2>
          <div className='outside-column'>
            <CardList 
            droppableId='list'
            columnId={'list'}
            column={props.columns['list']}
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