import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

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
import attemptLogin from "../helpers/attemptLogin";

const Login = props => {

  // --------- DECLARING STATE --------------------------- //
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

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
                    attemptLogin(
                      event,
                      userEmail,
                      userPassword,
                      setError,
                      props.setUser
                    );
                  }}
                >
                  {props.user ? history.goBack() : null}

                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>

                  <CardBody>
                    <p className="length-error">{error}</p>

                    <CustomInput
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
                    />
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button type="submit" simple color="info" size="lg">
                      Sign In
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
export default Login;