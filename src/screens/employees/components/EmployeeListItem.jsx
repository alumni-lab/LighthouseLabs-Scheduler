import React from 'react';
import classnames from 'classnames';
import {arrFormatter} from '../helpers/helpers';

const EmployeeListItem = ({employee}) => {
  const contractClass = classnames("employee__contract__part__time",
    { "employee__contract__full_time" : employee.is_full_time }
  );
  return (
    <div className='employee_list_item'>
          <h3>Employeed ID: {employee.employee_id}</h3>
          <p>Employee Name: {`${employee.first_name} ${employee.last_name}`}</p>
          <p>Lecture: {(employee.able_to_lecture) ? 'YES' : 'NO'}</p>
          <p>Role: {employee.role}</p>
          <p className={contractClass}>Contract Type: {(employee.is_full_time) ? 'Full Time' : 'Part Time'}</p>
          <p>Email: {(employee.email) ? employee.email : 'Lives in the cave'}</p>
          <p>Phone: {(employee.phone) ? employee.phone : 'Too Poor'}</p>
          <p>Specialty: {arrFormatter(employee.specialty)}</p>
          <p>Github: {employee.github}</p>
          <p>Social Network: {(employee.social_network) ? employee.social_network : 'None'}</p>
          <p>Website: {(employee.website) ? employee.website : 'None'}</p>
    </div>
  );
};

export default EmployeeListItem;