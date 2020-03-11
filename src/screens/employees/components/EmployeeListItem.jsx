import React from 'react';
import {arrFormatter} from '../helpers/helpers';

const EmployeeListItem = ({employee}) => {
  return (
    <div className='employee_list_item'>
      <ul>
        <li>
          <h3>Employeed ID: {employee.employee_id}</h3>
          <p>Employee Name: {`${employee.first_name} ${employee.last_name}`}</p>
          <p>Lecture: {(employee.able_to_lecture) ? 'YES' : 'NO'}</p>
          <p>Role: {employee.role}</p>
          <p>Email: {(employee.email) ? employee.email : 'Lives in the cave'}</p>
          <p>Phone: {(employee.phone) ? employee.phone : 'Too Poor'}</p>
          <p>Specialty: {arrFormatter(employee.specialty)}</p>
          <p>Github: {employee.github}</p>
          <p>Social Network: {(employee.social_network) ? employee.social_network : 'None'}</p>
          <p>Website: {(employee.website) ? employee.website : 'None'}</p>
        </li>
      </ul>
    </div>
  );
};

export default EmployeeListItem;