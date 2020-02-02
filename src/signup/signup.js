import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './signupStyles';
import firebase from 'firebase';

class Signup extends Component {
  state = {  }
  render() { 
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form onSubmit={(event) => this.submitSignUp(event)} className={classes.form}>
            <FormControl>
              <InputLabel required fullwidth margin="normal">Your email</InputLabel>
              <Input></Input>
            </FormControl>
          </form>
        </Paper>
      </main>
    );
  }

  submitSignUp = (event) => {

  }
}
 
export default withStyles(styles)(Signup);