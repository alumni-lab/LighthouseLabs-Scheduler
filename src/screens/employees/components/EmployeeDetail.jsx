import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText } from "@material-ui/core";
import classnames from "classnames";

import EmployeeListItem from "./EmployeeListItem";

const handleClickOpen = setOpen => {
  setOpen(true);
};
const handleClose = setOpen => {
  setOpen(false);
};

const EmployeeDetail = ({ employee }) => {
  const [open, setOpen] = useState(false);

  const modalStlye = {
    height: "5vh",
    width: "25vw",
    marginBottom: "0px",
    display: "flex",
    justifyContent: "flex-start"
  };
  const textFieldStyle = {};

  return (
    <div className="emp_detail">
      {employee.is_full_time ? (
        <Button
          varient="contained"
          color="secondary"
          onClick={() => handleClickOpen(setOpen)}
        >
          {" "}
          {`${employee.first_name} ${employee.last_name}`}{" "}
        </Button>
      ) : (
        <Button
          varient="contained"
          color="primary"
          onClick={() => handleClickOpen(setOpen)}
        >
          {" "}
          {`${employee.first_name} ${employee.last_name}`}{" "}
        </Button>
      )}
      <Dialog
        open={open}
        onClose={() => handleClose(setOpen)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={modalStlye}>
          {`${employee.first_name} ${employee.last_name}`}
        </DialogTitle>
        <DialogContent style={textFieldStyle}>
          {" "}
          <EmployeeListItem employee={employee} />{" "}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeDetail;
