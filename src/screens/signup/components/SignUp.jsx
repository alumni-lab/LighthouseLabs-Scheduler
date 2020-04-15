import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

//checkbox
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Person from '@material-ui/icons/Person'
// core components
import Header from "../../../general/Header/Header";
import GridContainer from "../../../general/Grid/GridContainer";
import GridItem from "../../../general/Grid/GridItem";
import Button from "../../../general/CustomButtons/Button";
import Card from "../../../general/Card/Card";
import CardHeader from "../../../general/Card/CardHeader";
import CardBody from "../../../general/Card/CardBody";
import CustomInput from "../../../general/CustomInput/CustomInput";
import CardFooter from "../../../general/Card/CardFooter";
import styles from "../../../general/Assets/jss/material-kit-react/views/loginPage.js";
// import image from "../../../assets/img/temple-trees.jpg";
// --------- HELPER FUNCTION --------------------------- //
import attemptSignUp from "../helpers/attemptSignUp";




const SignUp = props => {
  const history = useHistory();
  if (!props.user || !props.user.is_admin) {
    history.push("/");
  }


  // --------- DECLARING STATE --------------------------- //
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [role, setRole] = useState('Mentor');
  const [wage, setWage] = useState('');
  const [fullTimeStatus, setFullTimeStatus] = useState(false);
  const [abilityToLecture, setAbilityToLecture] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [emailNow, setEmailNow] = useState(true);
  const [error, setError] = useState("");
  
  
  // --------- CARD DROP-DOWN STYLE --------------------- //

  const useStyles = makeStyles(styles);
  
  setTimeout(function() {
    setCardAnimation("");
  }, 400);
  
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="LHL SCHEDULER"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + " " + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{ width: "500px" }}>
          <GridContainer>
            <GridItem>
              <Card className={classes[cardAnimaton]}>
                <form
                  className={classes.form}
                   onSubmit={event => {

                    event.preventDefault(); 
                    attemptSignUp(
                      userFirstName,
                      userLastName,
                      userEmail,
                      role,
                      wage,
                      fullTimeStatus,
                      abilityToLecture,
                      isAdmin,
                      setError,
                      emailNow
                    )
                    .then((e)=>{
                      history.push('/');
                    })
                    .catch(e => alert("Failed to create a new user. Please Try Again."))
                  }}
                >
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>CREATE NEW USER</h4>
                  </CardHeader>
                  <CardBody>
                    <p className="length-error">{error}</p>
                    <Autocomplete
                      options={['Insturctor', 'Mentor', 'Staff']}
                      getOptionLabel={option => option}
                      id="auto-select"
                      autoSelect
                      renderInput={params => <TextField required={true} {...params} label="Role" style={{opacity:0.6,marginBottom:'20px'}} />}
                      value={role}
                      onChange={(event, newValue) => {
                        setRole(newValue);
                      }}
                    />
                    <CustomInput
                      labelText="First Name"
                      id="first_name"
                      formControlProps={{ fullWidth: true, required:true }}
                      inputProps={{
                        type: "text",
                        value: userFirstName,
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Person className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // ),
                        onChange: e => {
                          setUserFirstName(e.target.value);
                        }
                      }}
                    />
                    <CustomInput
                      labelText="Last Name"
                      id="last_name"
                      formControlProps={{ fullWidth: true, required: true }}
                      inputProps={{
                        type: "text",
                        value: userLastName,
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Person className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // ),
                        onChange: e => {
                          setUserLastName(e.target.value);
                        }
                      }}
                    />
                    <CustomInput
                      labelText="Wage($)"
                      id="wage"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{
                        type: "text",
                        value: wage,
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Person className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // ),
                        onChange: e => {
                          if (Number(e.target.value)) {
                            setWage(e.target.value);
                          } else {
                            setWage('');
                          }
                        }
                      }}
                    />
                     <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{ fullWidth: true, required: true }}
                      inputProps={{
                        type: "text",
                        value: userEmail,
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Person className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // ),
                        onChange: e => {
                          setUserEmail(e.target.value);
                        }
                      }}
                    />
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={fullTimeStatus} 
                          onChange={e=>setFullTimeStatus(!fullTimeStatus)} 
                        />
                      }
                      label="Full-Time"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={abilityToLecture}
                          onChange={e=>setAbilityToLecture(!abilityToLecture)}
                          color="primary"
                        />
                      }
                      label="Able to Lecture"
                    />
                    <FormControlLabel 
                      control={
                        <Checkbox 
                          checked={isAdmin}
                          onChange={e=>setIsAdmin(!isAdmin)}
                          color="default"
                        />
                      }
                      label="Admin" />
                  
                  </FormGroup>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                  <FormControlLabel 
                      control={
                        <Checkbox 
                          checked={emailNow}
                          onChange={e=>setEmailNow(!emailNow)}
                          color="default"
                        />
                      }
                      label="share id/pw with the new user now?" />
                    <Button type="submit" simple color="info" size="lg">
                      Create
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};
export default SignUp;


{/* <CustomInput
labelText="Email"
id="email"
formControlProps={{ fullWidth: true }}
inputProps={{
  type: "email",
  value: userEmail,
  endAdornment: (
    <InputAdornment position="end">
      <Email className={classes.inputIconsColor} />
    </InputAdornment>
  ),
  onChange: e => {
    setUserEmail(e.target.value);
  }
}}
/>
<CustomInput
labelText="Password"
id="pass"
formControlProps={{
  fullWidth: true
}}
inputProps={{
  type: "password",
  value: userPassword,
  endAdornment: (
    <InputAdornment position="end">
      <Icon className={classes.inputIconsColor}>
        lock_outline
      </Icon>
    </InputAdornment>
  ),
  autoComplete: "off",
  onChange: e => {
    setUserPassword(e.target.value);
  }
}}
/> */}