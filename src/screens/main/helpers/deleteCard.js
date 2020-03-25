export default function deleteCard (card_index, slotId, columns, setColumns, dayId) {

  const column = columns[dayId].items[slotId]
  console.log("col",column)
  console.log("slot id", slotId)
  const copiedItems = [...column.items];
  const [removed] = copiedItems.splice(card_index, 1);/*comment this*/
  // copiedItems.splice(card_index, 1); //uncomment
  // const list = columns[`list`];
  // const listItems = [...list.items]
  // listItems.unshift(removed);/*comment this to make it disappear*/

  setColumns({
    ...columns,
    [dayId]: {
      ...columns[dayId],
      items: {...columns[dayId].items, 
      [slotId]:{
        ...columns[dayId].items[slotId],
        items:copiedItems
      }
      }
    }
  });

}