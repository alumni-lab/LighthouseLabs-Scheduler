import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CustomInput from "../../../general/CustomInput/CustomInput";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

 const Edit = function FormDialog(props) {

  const [open, setOpen] = React.useState(false);
  const [err, setErr] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const save = () => {
    if (changePW) {
      if (conditionals.length&&conditionals.match){

        //after axios
        props.setEmployee(empInfo)
        handleClose();
        
      } else {
        setErr(true);
      }
    } else {

       //after axios
      props.setEmployee(empInfo)
      handleClose()
    
    }
  }
  const cancel = () => {
    handleClose();
  }
  const reset = () => {
    setErr(false);
    setEmpInfo(props.employee);
    setChangePW(false);
    setPassword({...pw})
    setRepassword({...pw})
  }

  useEffect(()=>{
    setTimeout(()=>{
      reset()
    },500)
  },[open])


  const [empInfo, setEmpInfo] = useState(props.employee)
  const [changePW, setChangePW] = useState(false);

  const pw={
    value:'',
    length: 0,
    showPassword: false
  }
  const [password, setPassword] = useState({...pw})
  const [repassword, setRepassword]= useState({...pw});

  const showPW = (state,cb) => {
    cb({
      ...state,
      showPassword: !state.showPassword
    })
  }
  
  const conditionals = {
    length: password.length>6 && repassword.length>6,
    match:  password.length>0 && repassword.length>0 && password.value === repassword.value
  }

  // const [condition, setCondition] = useState()


  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          <h3>
            Edit Your Information
          </h3>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            value={empInfo.email}
            onChange={e=> {
              const newState = {...empInfo, email:e.target.value};
              setEmpInfo(newState)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            value={empInfo.phone}
            onChange={e=> {
              const newState = {...empInfo, phone:e.target.value};
              setEmpInfo(newState)
            }}
          />
           {/* <TextField
            autoFocus
            margin="dense"
            id="specialty"
            label="Specialty"
            type="text"
            fullWidth
            value={empInfo.specialty}
            onChange={e=> {
              const newState = {...empInfo, email:e.target.value};
              setEmpInfo(newState)
            }}
          /> */}
           <TextField
            autoFocus
            margin="dense"
            id="github"
            label="Github"
            type="text"
            fullWidth
            value={empInfo.github}
            onChange={e=> {
              const newState = {...empInfo, github:e.target.value};
              setEmpInfo(newState)
            }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="website"
            label="Personal Website"
            type="text"
            fullWidth
            value={empInfo.website}
            onChange={e=> {
              const newState = {...empInfo, website:e.target.value};
              setEmpInfo(newState)
            }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="social_network"
            label="Social Network"
            type="text"
            fullWidth
            value={empInfo.social_network}
            onChange={e=> {
              const newState = {...empInfo, social_network:e.target.value};
              setEmpInfo(newState)
            }}
          />
            <TextField
            autoFocus
            margin="dense"
            id="profile_image"
            label="Profile Image URL"
            type="text"
            fullWidth
            value={empInfo.image_url}
            onChange={e=> {
              const newState = {...empInfo, image_url:e.target.value};
              setEmpInfo(newState)
            }}
          />
          {!changePW? <Button onClick={()=>{setChangePW(!changePW)}} color="default"> 
          Change Password
          </Button>:
          <>
          <CustomInput
            labelText="New Password"
            id="password"
            formControlProps={{ fullWidth: true, required:true }}
            required={true}
            inputProps={{
              type:password.showPassword ? 'text' : 'password',
              value:password.value,
              onChange: e => {
                const newState = {...password, value:e.target.value, length: e.target.value.length};
                setPassword(newState)
              },
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={e=>{
                      showPW(password,setPassword)
                    }}
                    edge="end"
                  >
                    {password.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
              }}
            />
          <CustomInput
            labelText="Re-enter Password"
            id="repassword"
            formControlProps={{ fullWidth: true, required:true }}
            required={true}
            inputProps={{
              type:repassword.showPassword ? 'text' : 'password',
              value:repassword.value,
              onChange: e => {
                const newState = {...repassword, value:e.target.value, length: e.target.value.length};
                setRepassword(newState)
              },
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={e=>{
                      showPW(repassword,setRepassword)
                    }}
                    edge="end"
                  >
                    {repassword.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
              }}
            />
            {err?<p style={{color:'red',fontSize:"14px"}}> Condistions are not met.</p>:""}
            <ul>
              <li>Both PWs are longer than 6 characters: {conditionals.length?'✅':'❌'}</li>
              <li>Both PWs match: {conditionals.match?'✅':'❌'}</li>
            </ul>
          </>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Edit



