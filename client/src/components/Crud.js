import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { deepPurple, green } from "@material-ui/core/colors";
import List from "./List";
import axios from "axios";
import { useState } from "react";

const useStyles = makeStyles({
  haddingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});
const Crud = () => {
  const classes = useStyles();
  const [student, setStudent] = useState({
    stuName: "",
    email: "",
  });

  const [status, setStatus] = useState();

  function textChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/student `, student);
      setStatus(true);
      //  console.log(student.data);
      // setStudent(student.data);
    } catch (error) {
      console.log(error);
    }
  }
  if (status) {
    return <Crud />;
  }
  return (
    <>
      <Box textAlign="center" className={classes.haddingColor} p={2} mb={2}>
        <Typography variant="h2">Add Name In List</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Fill Details</Typography>
          </Box>
          <form noValidate>
            <Grid container specing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => textChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => textChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Crud;
