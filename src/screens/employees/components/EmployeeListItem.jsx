import React,{useState} from 'react';
import {arrFormatter} from '../helpers/helpers';
import Modal from '../../../general/Modal/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import Edit from './Edit';
import Delete from './Delete';

const useStyles = makeStyles( theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const EmployeeListItem = (props) => {
  const classes = useStyles();
  const user = props.user;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [employee, setEmployee] = useState(props.employee);
 
  console.log(props.employees)
  return (
    <div className='employee_list_item'>
     <Card className={classes.root} variant="outlined">
       <div className='employee_card'>
       <div>
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          small text
          </Typography> */}
          <Typography variant="h5" component="h2">
        {`${employee.first_name} ${employee.last_name}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {employee.role}
        
          </Typography>
          <Typography variant="body2" component="p">
            Email: {(employee.email) ? employee.email : 'Lives in the cave'}
            <br />
            Phone: {(employee.phone) ? employee.phone : 'Too Poor'} 
          </Typography>
        </CardContent>
        
        {(user && user.employee_id === employee.employee_id)|| 
         (user && user.is_admin)
        ? 
        <>
        <CardActions>
        <span style={{marginLeft:"10px",fontSize:"15px",fontWeight:'bold'}}>Profile</span>
         <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit style={{width:'inherit'}}>
        <CardContent>
          <div className='employee_card'>
          <Typography paragraph>
          <h3>Employeed ID: {employee.employee_id}</h3>
            <div className='collapse-container'>
              <div>
                <p>Employee Name: {`${employee.first_name} ${employee.last_name}`}</p>
                <p>Lecture: {(employee.able_to_lecture) ? 'YES' : 'NO'}</p>
                <p>Role: {employee.role}</p>
                <p>Email: {(employee.email) ? employee.email : 'Lives in the cave'}</p>
              </div>
              <div>
                <p>Phone: {(employee.phone) ? employee.phone : 'Too Poor'}</p>
                <p>Github: {employee.github}</p>
                <p>Social Network: {(employee.social_network) ? employee.social_network : 'None'}</p>
                <p>Website: {(employee.website) ? employee.website : 'None'}</p>
              </div>
              <div className='buttons'>
              <CardActions>
                <Edit employee={employee} setEmployee={setEmployee}/>
                <Delete employee={employee} employees={props.employees} setEmployees={props.setEmployees}/>
              </CardActions>
              </div>
            
            </div>
            
            {/* <p>Specialty: {arrFormatter(employee.specialty)}</p> */}
          </Typography>
     
          </div>
        </CardContent>
      </Collapse>
      </>    
      :null}
          
       </div>
      <img src= {employee.image_url?employee.image_url:"https://extendedevolutionarysynthesis.com/wp-content/uploads/2018/02/avatar-1577909_960_720.png"} height='200px'/>
      </div>
    </Card>

   

    </div>
  );
};

export default EmployeeListItem;


