import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login';
import SignUp from './components/SignUp'

import { PrivateRoute } from './utils/PrivateRoute'

import { SleepTracker } from './components/SleepTracker'
// import { AddSleepData } from './components/AddSleepData'

import './App.css'

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  // const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <Router>
      <div className='app'>
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li className='home'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='login'>
              <Link to="/login">Login</Link>
            </li>
            <li className='sign-up'>
              <Link to='/sign-up'>Sign up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/sleep-tracker' component={SleepTracker} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
