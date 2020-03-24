import React, {
  // useState, 
  useEffect} from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Card from './Card'

const CardList = (props) => {

  return (
    <Droppable 
    droppableId={props.columnId}
    key={props.columnId}
    isDropDisabled={props.columnId==='list'
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
          {props.column.items.map((item, index) => {
            return (
              <Card
                isClone='true'
                key={item.id}
                draggableId={item.id}
                droppableId={props.columnId}
                index={index}
                item={item}
                setColumns={props.setColumns}
                columns={props.columns}
              />
            );
          })}
          {provided.placeholder}
        </div>
      );
    }}
  </Droppable>
  );
};

export default CardList;