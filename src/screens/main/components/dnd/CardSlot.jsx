import React, {
  // useState, 
  useEffect} from 'react';
import CardList from './CardList'

const CardSlot = (props) => {
        return (
          <div
            className={"column"}
            style={{
            width: 140,
            minHeight: 500,
            border: '0.02px ridge black'
            }}
          >
            {Object.entries(props.column.items).map(([id,slot]) => {
              return (
                <CardList
                droppableId={slot.id}
                slotId={id}
                columns={props.columns}
                slot={slot}
                dayId={props.dayId}
                setColumns={props.setColumns}
                />
              );
            })}
          </div>
        );  
};

export default CardSlot;