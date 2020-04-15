export default function clearList (dayId, columns, setColumns) {
  let newState = {...columns};
  // let deletedItems = newState[dayId].items
  // newState['list'].items = [...newState['list'].items, ...deletedItems];
  // newState[dayId].items
  // setColumns(newState)
  const target = newState[dayId].items;
  for (let ele in target) {
    target[ele].items=[]
  }
  setColumns(newState)
}