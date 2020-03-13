import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Loading from '../../../general/Loading/Loading';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import axios from 'axios';


 const Delete = function FormDialog(props) {

 
  const employee = props.employee;
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteEmp = () =>{
    setMode('loading');

    const newState = [...props.employees];
    for(let i = 0; i < newState.length; i++) {
      if(newState[i].employee_id === employee.employee_id) {
        newState.splice(i,1);
      };
    }

    setTimeout(()=>{
      axios.post('/users/delete',{
        id:employee.id
      })
      .then(res => {
        console.log("User Deleted: ", res.data.first_name,  res.data.employee_id)
        setMode('complete');
        setTimeout(()=>{
          handleClose();
          setMode(null);
          props.setEmployees(newState);
        },500)
      }).catch(err => {
        alert("Failed to Delete")
        setMode(null)
      })
    },1000)
  }
  
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <h3>
            Deleting {props.employee.first_name} {props.employee.last_name}
          </h3>
        </DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this user?</p>
          
        </DialogContent>
        <DialogActions>
          {!mode? <Button onClick={deleteEmp} color="secondary">
            Delete
          </Button> :
          mode === 'loading'? <Loading type={'bars'} color={'black'} />
          : <DoneOutlineOutlinedIcon/>
           }
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Delete



