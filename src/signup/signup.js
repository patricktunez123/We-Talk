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
          <Typography component="h1" variant="h5"> Sign Up </Typography>

          <form onSubmit={(event) => this.submitSignUp(event)} className={classes.form}>
            <FormControl  required fullWidth margin='normal'>
              <InputLabel htmlFor='email-signup'>Your email</InputLabel>
              <Input autoComplete='email' onChange={(event) => this.userIsTyping('email', event)} autoFocus id='email-signup'></Input>
            </FormControl>

            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='password-signup'>Create a password</InputLabel>
              <Input type='password' onChange={(event) => this.userIsTyping('password', event)} id='password-signup'></Input>
            </FormControl>

            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='password-comfirm'>Re-enter the password</InputLabel>
              <Input type='password' onChange={(event) => this.userIsTyping('passwordComfirmation' ,event)} id='password-comfirm'></Input>
            </FormControl>

            <Button fullWidth variant='contained' color='primary' className={classes.submit}>Create account</Button>
          </form>
        </Paper>
      </main>
    );
  }

  userIsTyping = (typing, event) => {
    console.log(typing, event)
  }
  submitSignUp = (event) => {
    console.log('submited')
  }
}
 
export default withStyles(styles)(Signup);