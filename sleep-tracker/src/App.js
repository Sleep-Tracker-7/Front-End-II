import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withCookies } from 'react-cookie'
// import { connect } from 'react-redux'
// import { useForm } from 'react-hook-form';
// import { render } from '@testing-library/react';

import Login from './components/Login';
import SignUp from './components/SignUp'
import { PrivateRoute } from './utils/PrivateRoute'
import SleepTracker from './components/SleepTracker'
// import { getSleepData } from './action/indexAction'
// import { AddSleepData } from './components/AddSleepData'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className='app'>


        <Router>
          <AppBar position="relative">
            <Toolbar>
                <div style={{display:'flex', margin:'0 auto', justifyContent:'flex-end', width: '100%'}}>
                 <div style={{display:'flex', justifyContent:'space-evenly', width:'40%'}}>
                    <Link style={{color:'white', width:'25%', fontWeight:'bold', textDecoration:'none'}} to='/home'>Home</Link>
                    <Link style={{color:'white', width:'25%', fontWeight:'bold', textDecoration:'none'}} to="/login">Login</Link>
                    <Link style={{color:'white', width:'25%', fontWeight:'bold', textDecoration:'none'}} to='/sign-up'>Sign up</Link>
                 </div>
                </div>
            </Toolbar>
          </AppBar>
          <Switch>
            <PrivateRoute exact path='/sleep-tracker' component={SleepTracker} />
            {/* <PrivateRoute exact path='/sleep-tracker' render={() => (<SleepTracker cookies={this.props.cookies} />)} /> */}
            <Route path='/sign-up' component={SignUp} />
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
    )
  };
}

// const mapStateToProps = (state, ownProps) => {
//   return ({
//     state: state,
//     cookies: ownProps.cookies,
//   });
// };

export default withCookies(App)
