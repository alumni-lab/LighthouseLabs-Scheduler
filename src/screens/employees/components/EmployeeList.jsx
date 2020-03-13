import React, {useState} from 'react';
import './employee.css'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = (props) => {
//  const [update, setUpdate] = useState(false);
  return (

    <div className="employee-list-item">
      <h1 className = 'add_space employee_list_heading'>Our Team</h1>
      {props.employees.map( (employee) => {
        return (
            <EmployeeListItem 
              key={employee.id} 
              setEmployees={props.setEmployees}
              employees={props.employees}
              employee={employee} 
              user={props.user}
            />

        )
      })}
    </div>
  );
};

export default EmployeeList;