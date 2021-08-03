import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import * as EmailValidator from "email-validator";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {
  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [value, onChange] = useState(new Date());

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    // if (password || cpassword === "") {
    //   alert(`Invaid Passwords`);
    //   history.push("/register");
    // }
    // if (email === "") {
    //   alert(`Empty Email`);
    //   history.push("/register");
    // } else if (lname || fname !== "") {
    //   alert(`Invalid Name`);
    //   history.push("/register");
    // } else if (dob !== "") {
    //   alert(`Invalid Name`);
    //   history.push("/register");
    // } else {
    if (password !== cpassword) {
      alert(`Password are not same`);
      history.push("/register");
    } else if (lname || fname !== "") {
      alert(`Names  are Empty`);
      history.push("/register");
    } else {
      const newUser = {
        title,
        fname,
        lname,
        email,
        dob,
        password,
        cpassword,
      };
      alert("You have submitted the form.");
      console.log(`>>>>`, newUser);
      history.push("/dashboard");
    }
  };

  const classes = useStyles();
  return (
    <div className="register">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <div className="register__checkbox">
              <FormControlLabel
                control={<Checkbox value="mr" color="primary" />}
                label="Mr"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="mrs" color="primary" />}
                label="Mrs"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="ms" color="primary" />}
                label="Ms"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="Rev" color="primary" />}
                label="Rev"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoComplete="fname"
              autoFocus
              onChange={(e) => setFname(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
              autoComplete="lname"
              autoFocus
              onChange={(e) => setLname(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <>
              <Calendar onChange={onChange} value={value} />
            </>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="cpassword"
              id="cpassword"
              autoComplete="current-password"
              onChange={(e) => setCpassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2">
                  Login
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Wanna go Home ?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default Register;
