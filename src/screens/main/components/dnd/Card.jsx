import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import deleteCard from '../../helpers/deleteCard'
const Card = (props) => {
  return (
    <Draggable
      key={props.draggableId}
      draggableId={props.draggableId}
      index={props.index}
    >
      {(provided, snapshot) => {
      return (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card'
          style={{
            userSelect: "none",
            padding: 16,
            margin: "0 0 8px 0",
            minHeight: "50px",
            backgroundColor: snapshot.isDragging
              ? "#263B4A"
              : "#456C86",
            color: "white",
            ...provided.draggableProps.style
          }}
        >
            <div className='item-cont'>
                <strong className='item-name'>{props.item.content}</strong>
            </div>
            <div className='item-cont2'>
              {props.droppableId ==='list'?"": <button className='item-delete btn btn-danger' onClick={()=> deleteCard(props.index, props.droppableId, props.columns, props.setColumns)}>
              close
              </button>} 
            </div>
        </div>
      );
    }}
    </Draggable>
  );
};
export default Card;