import React, {
  // useState, 
  useEffect} from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'

const CardList = (props) => {

  if (props.droppableId==='list'){
    return (
      <Droppable 
      droppableId={props.droppableId}
      key={props.droppableId}
      isDropDisabled={props.droppableId==='list'
      }
      >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={"inside-column"}
            style={{
              background: snapshot.isDraggingOver
              ? "lightblue"
              : "lightgrey",
            padding: 4,
            width: 140,
            minHeight: 500,
            border: '0.02px ridge black'
            }}
          >
            {props.mentors.map((mentor, index) => {
              return (
                <Card
                  key={mentor.id}
                  draggableId={mentor.id}
                  droppableId={props.droppableId}
                  index={index}
                  mentor={mentor}
                  columns={props.columns}
                  setColumns={props.setColumns}
                />
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
    );
  } else {
    return (
      <Droppable 
      droppableId={props.droppableId}
      key={props.droppableId}
      isDropDisabled={false}
      direction="horizontal"
      >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={"inside-column"}
            style={{
              display:'flex',
              background: snapshot.isDraggingOver
              ? "lightblue"
              : "lightgrey",
            padding: 0,
            width: 140,
            minHeight: 50,
            border: '0.02px ridge black'
            }}
          >
            {props.slot.items.map((mentor, index) => {
              return (
                <Card
                  key={mentor.id}
                  draggableId={mentor.id}
                  droppableId={props.droppableId}
                  index={index}
                  mentor={mentor}
                  columns={props.columns}
                  setColumns={props.setColumns}
                  dayId={props.dayId}
                  slotId={props.slotId}
                />
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
    );
  }
  
};

export default CardList;