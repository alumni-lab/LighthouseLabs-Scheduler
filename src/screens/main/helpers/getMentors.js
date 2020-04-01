import uuid from 'uuid/v4';

export default function getMentors () {
  const mentors = [
    { id: uuid(), name: "Andy" },
    { id: uuid(), name: "Travis" },
    { id: uuid(), name: "Jeremy"},
    { id: uuid(), name: "Jay" },
    { id: uuid(), name: "Aaron" }
  ];
  
  const mentorList = {
    'list':{
      name: "Available Mentors",
      items: mentors
    }
  };
  
  return mentorList  
}