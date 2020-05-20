import React from 'react';
import './App.css';
import Stats from './components/stats.js';
import Login from './components/Login';
import Clock from './components/Clock'
import axios from 'axios'
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {
      isLoggedIn: true,
      user: {
          username: ' ',
          email:' ',
          password: ' ', 
          user_id: 1,
        },
       sleeptimes:{
          bedtime: 0,
          waketime: 1,
          sleepquality: 2,
          date: 3,
        }  
    isLoggedIn: true,
    user: {
      email: " ",
      username: " ",
      password: " "
      
    },
    sleeptimes: {
      bedtime: 0,
      waketime: 1,
      sleepquality: 2,
      date: 3
    }
  };


export default App;
