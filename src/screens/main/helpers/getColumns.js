import uuid from 'uuid/v4';
import moment from 'moment';

const makeSlots = () => {
  return (
    {
      '10-12':{
        id: uuid(),
        name: '10-11',
        items:[]
      },
      '11-12':{
        id: uuid(),
        name: '11-12',
        items:[]
      },
      '12-13':{
        id: uuid(),
        name: '12-13',
        items:[]
      },
      '13-14':{
        id: uuid(),
        name: '13-14',
        items:[]
      }, 
      '14-15':{
        id: uuid(),
        name: '14-15',
        items:[]
      },
      '15-16':{
        id: uuid(),
        name: '15-16',
        items:[]
      }, 
      '16-17':{
        id: uuid(),
        name: '16-17',
        items:[]
      },
      '17-18':{
        id: uuid(),
        name: '17-18',
        items:[]
      }, 
      '18-19':{
        id: uuid(),
        name: '18-19',
        items:[]
      },
      '19-20':{
        id: uuid(),
        name: '19-20',
        items:[]
      }, 
      '20-21':{
        id: uuid(),
        name: '20-21',
        items:[]
      }
    }
  )
}


export default function getColumns () {
  const numberOfDays=7;
  const columns = {};
  const start = moment();
  for (let i = 0; i < numberOfDays; i += 1) {
    const slots = makeSlots();
    const date = moment(start).add(i, 'd').format('dddd (MMM D)');
    columns[uuid()] = {
      name: date,
      items: slots
    };
  };
  return columns
}