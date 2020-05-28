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

import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Router>
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
