import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import Login from './login/login';
import Signup from './signup/signup';
import Dashboard from './dashBoard/dashboard';

firebase.initializeApp({
  apiKey: "AIzaSyAaNlJ3Xy90qWb3cHC6WinTZN1a6T-vNvI",
  authDomain: "we-talk-36685.firebaseapp.com",
  databaseURL: "https://we-talk-36685.firebaseio.com",
  projectId: "we-talk-36685",
  storageBucket: "we-talk-36685.appspot.com",
  messagingSenderId: "1071788481604",
  appId: "1:1071788481604:web:3fc8c7b1edc0646b337011",
  measurementId: "G-226CH8RWWE"
})

const routers =(
  <Router>
    <div id="routers-container">
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </div>
  </Router>
)

ReactDOM.render(routers, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
