import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import SleepCard from './components/SleepCard'

import Login from './components/Login';
import SignUp from './components/SignUp'
import { PrivateRoute } from './utils/PrivateRoute'
import SleepTracker from './components/SleepTracker'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

import AddSleepData from './components/AddSleepData'

import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className='App'>


        <Router>
          <AppBar position="relative">
            <Toolbar className='toolbar'>
              <div style={{ display: 'flex', margin: '0 auto', justifyContent: 'flex-end', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '40%' }}>
                  <Link style={{ color: 'white', width: '25%', fontWeight: 'bold', textDecoration: 'none' }} to='/home'>Home</Link>
                  <Link style={{ color: 'white', width: '25%', fontWeight: 'bold', textDecoration: 'none' }} to="/login">Login</Link>
                  <Link style={{ color: 'white', width: '25%', fontWeight: 'bold', textDecoration: 'none' }} to='/sign-up'>Sign up</Link>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <Switch>
            <PrivateRoute exact path='/sleep-tracker' component={SleepTracker} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/add-sleep' component={AddSleepData} />
            {/* <PrivateRoute exact path='/sleep-tracker/:id' component={SleepCard}/> */}
            <Route
              path='/sleep-tracker/:index'
              render={(props) => <SleepCard {...props} />}
            />
          </Switch>
        </Router>
      </div>
    )
  };
}

export default withCookies(App)
