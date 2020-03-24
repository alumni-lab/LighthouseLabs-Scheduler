export default function deleteCard (card_index, cardList_id, columns, setColumns) {

  const column = columns[cardList_id];
  const copiedItems = [...column.items];
  const [removed] = copiedItems.splice(card_index, 1);/*comment this*/
  // copiedItems.splice(card_index, 1); //uncomment
  const list = columns[`list`];
  const listItems = [...list.items]
  listItems.unshift(removed);/*comment this to make it disappear*/
  setColumns({
    ...columns,
    [cardList_id]: {
      ...column,
      items: copiedItems
    },
    'list': {
      ...list,
      items: listItems
    }
  });
}