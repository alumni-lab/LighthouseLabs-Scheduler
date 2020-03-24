export default function clearList (columnId, columns, setColumns) {
  let newState = {...columns};
  let deletedItems = newState[columnId].items
  newState[columnId].items = [];
  newState['list'].items = [...newState['list'].items, ...deletedItems]
  setColumns(newState)
}