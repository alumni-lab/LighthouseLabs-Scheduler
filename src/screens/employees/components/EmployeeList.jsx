import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import './employee.css'

import Header from '../../../general/Header/Header';
import EmployeeDetail from './EmployeeDetail';

import { arrSorterAscToDsc } from '../helpers/helpers';


const EmployeeList = (props) => {
//  const [update, setUpdate] = useState(false);
  return (

    <div>
      <h1 className = 'add_space employee_list_heading'>Employee List</h1>
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