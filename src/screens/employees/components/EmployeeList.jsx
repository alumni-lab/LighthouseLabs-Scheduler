import React from 'react';
import { Link, useHistory } from "react-router-dom";
import './employee.css'

import Header from '../../../general/Header/Header';
import EmployeeListItem from './EmployeeListItem';

const employees = [
  {
  'id': 1,
  'first_name': "Travis",
  'last_name': "Borsa",
  'is_full_time': true,
  'able_to_lecture': true,
  'wage': 3500,
  'role': "Instructor",
  'user_type': "employee",
  'employee_id': 101010,
  'account': "travis_lhl",
  'password': "123",
  'email': null,
  'phone': null,
  'specialty': ['React', 'jQuery'],
  'github': null,
  'social_network': null,
  'website': null
  },
  {
  'id': 2,
  'first_name': "Jeremy",
  'last_name': "Holman",
  'is_full_time': false,
  'able_to_lecture': false,
  'wage': 3800,
  'role': "Instructor",
  'user_type': "employee",
  'employee_id': 101011,
  'account': "jeremy_lhl",
  'password': "123",
  'email': null,
  'phone': null,
  'specialty': ['React', 'Algorithms', 'jQuery', 'NodeJS'],
  'github': null,
  'social_network': null,
  'website': null
  }
  ]

const EmployeeList = (props) => {
  return (
    <div>
      <Header brand="LHL SCHEDULER" fixed />
      <h1 className = 'add_space employee_list_heading'>Employee List</h1>
      {employees.map( (employee) => {
        return (
            <EmployeeListItem 
              key={employee.id} 
              employee={employee} 
            />
        )
      })}
    </div>
  );
};

export default EmployeeList;