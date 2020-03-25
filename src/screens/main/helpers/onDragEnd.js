import uuid from 'uuid/v4';

export default function onDragEnd (result, columns, setColumns, mentors, setMentors){
  const { source, destination } = result;

  if (!result.destination) {
    return
  } 

  let dest = {};
  let dayId;
  let slotId;

  let src = mentors[source.droppableId];
  let dayIdSrc;
  let slotIdSrc;
  for (let ele in columns) {
    for (let slot in columns[ele].items) {
      if (destination.droppableId === columns[ele].items[slot].id) {
        dest = columns[ele].items[slot];
        dayId = ele;
        slotId = slot;
      }

      if (source.droppableId === columns[ele].items[slot].id) {
        src = columns[ele].items[slot];
        dayIdSrc = ele;
        slotIdSrc = slot;
      }
    }
  }
  // console.log("src: ", src);
  // console.log("dest: ", dest);
  // console.log("src dayId: ",dayIdSrc);
  // console.log("dest dayId: ", dayId);
  // console.log("src slotId: ", slotIdSrc);
  // console.log("dest slotId: ", slotId);
  if (source.droppableId ==='list' && source.droppableId !== destination.droppableId) {
    console.log("here1")
    const sourceColumn = src
    const destColumn = dest
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    // const [removed] = sourceItems.splice(source.index, 1); //comment this
    // and uncomment this to make it not removed from list
      let removed = {...sourceItems[source.index]};
      removed.id = uuid();

    destItems.splice(destination.index, 0, removed);
    
    setColumns({
      ...columns,
      [dayId]: {
        ...columns[dayId],
        items: {...columns[dayId].items, 
        [slotId]:{
          ...columns[dayId].items[slotId],
          items:destItems
        }
        }
      }
    });

  } else if (source.droppableId !== destination.droppableId ) {
  
    const sourceColumn = src;
    const destColumn = dest;
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
 
    destItems.splice(destination.index, 0, removed);

    if (dayId === dayIdSrc){
      setColumns({
        ...columns,
        [dayId]: {
          ...columns[dayId],
          items: {
            ...columns[dayId].items, 
          [slotId]:{
            ...columns[dayId].items[slotId],
            items:destItems
          },
          [slotIdSrc]:{
            ...columns[dayIdSrc].items[slotIdSrc],
            items:sourceItems
          }
        }
      }
      });

    } else {
      setColumns({
        ...columns,
        [dayId]: {
          ...columns[dayId],
          items: {
            ...columns[dayId].items, 
          [slotId]:{
            ...columns[dayId].items[slotId],
            items:destItems
          }
        }
      },
        [dayIdSrc]: {
          ...columns[dayIdSrc],
          items: {...columns[dayIdSrc].items, 
          [slotIdSrc]:{
            ...columns[dayIdSrc].items[slotIdSrc],
            items:sourceItems
          }
          }
        }
      });
    }
  } else {
    console.log("here3")
    const column = src;
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [dayIdSrc]: {
        ...columns[dayIdSrc],
        items: {...columns[dayIdSrc].items, 
        [slotIdSrc]:{
          ...columns[dayId].items[slotIdSrc],
          items:copiedItems
        }
        }
      }
    });
  }
};
