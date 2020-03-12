import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './employee.css'

import Header from '../../../general/Header/Header';
import EmployeeListItem from './EmployeeListItem';


const EmployeeList = (props) => {
  return (
    <div>
      <h1 className = 'add_space employee_list_heading'>Employee List</h1>
      {props.employees.map( (employee) => {
        return (
            <EmployeeListItem 
              key={employee.id} 
              employee={employee} 
              user={props.user}
            />
        )
      })}
    </div>
  );
};

export default EmployeeList;