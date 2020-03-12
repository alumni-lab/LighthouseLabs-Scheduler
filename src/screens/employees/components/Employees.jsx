import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import './employee.css'
import axios from 'axios';
import Header from '../../../general/Header/Header';
import EmployeeList from './EmployeeList';
 

const Employees = (props) => {
  const history = useHistory();
  if (!props.user) {
    history.push("/");
  }
  const [employees, setEmployees] = useState([]);
  useEffect(()=>{
    axios.get('/users')
    .then(res=>{
      console.log(res.data.users)
      const emps = res.data.users
      setEmployees (emps)
    })
  },[])
  
console.log(employees)
  return (
    <div>
      <Header
        // color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      <EmployeeList 
        setEmployees={setEmployees}
        employees={employees}
        user={props.user}
      />
    </div>
  );
};

export default Employees;

// const employees = [
//   {
//   'id': 1,
//   'first_name': "Travis",
//   'last_name': "Borsa",
//   'is_full_time': true,
//   'able_to_lecture': true,
//   'wage': 3500,
//   'role': "Instructor",
//   'user_type': "employee",
//   'employee_id': 101010,
//   'account': "travis_lhl",
//   'password': "123",
//   'email': null,
//   'phone': null,
//   'specialty': ['React', 'jQuery'],
//   'github': null,
//   'social_network': null,
//   'website': null
//   },
//   {
//   'id': 2,
//   'first_name': "Jeremy",
//   'last_name': "Holman",
//   'is_full_time': false,
//   'able_to_lecture': false,
//   'wage': 3800,
//   'role': "Instructor",
//   'user_type': "employee",
//   'employee_id': 101011,
//   'account': "jeremy_lhl",
//   'password': "123",
//   'email': null,
//   'phone': null,
//   'specialty': ['React', 'Algorithms', 'jQuery', 'NodeJS'],
//   'github': null,
//   'social_network': null,
//   'website': null
//   }
//   ]