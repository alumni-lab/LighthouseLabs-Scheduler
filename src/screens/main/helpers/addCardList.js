import uuid from 'uuid/v4'
export default function addCardList (columns,setColumns) {
  let keys = Object.keys(columns)
  let id = uuid()
  let name = `Column ${keys.length}`
  let newState = {
    ...columns,
    [id]:{
      name,
      items: []
    }}
  setColumns(newState)
}
