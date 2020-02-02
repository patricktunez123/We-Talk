import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'firebase/firestore';

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

ReactDOM.render(<div>hello</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
