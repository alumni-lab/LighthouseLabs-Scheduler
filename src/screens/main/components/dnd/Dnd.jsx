import React, {useEffect, useState} from 'react'
import DndContext from './DndContext'
import uuid from 'uuid/v4'

import onDragEnd from '../../helpers/onDragEnd'
import addCardList from '../../helpers/addCardList'

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = {
  'list': {
    name: "Content List",
    items: itemsFromBackend
  }
};


function Dnd(props) {

  for (let day of props.weekdayColumns) {
    columnsFromBackend[uuid()] = {
      name: day,
      items:[]
    }
  }

  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="dnd">
      <div className='dnd-context' style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
      }}>
        <DndContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
          columns={columns}
          setColumns={setColumns}
        />
      </div>
    </div>
    )
}

export default Dnd;