import React from 'react';
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import Login from './components/Login';


export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
=======
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Login from './components/Login'
import { PrivateRoute } from './utils/PrivateRoute'

import { SleepTracker } from './components/SleepTracker'
import { AddSleepData } from './components/AddSleepData'

export default function App() {
  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = data => console.log(data);
  // console.log(errors);
>>>>>>> 3bc8286f3d9e0c72bb319ab131e5dadd76bb767e

  return (
    <Router>
      <div className='app'>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            {/* Add signup link and form? */}
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/sleep-tracker' component={SleepTracker} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
<<<<<<< HEAD
} 
=======
}

// npm install react-hook-form
// npm install react-router-dom
// npm install axios
// npm install redux
// npm install react-redux
// npm install --save redux-thunk
// npm install --save react-middleware
// npm install --save-dev redux-devtools
>>>>>>> 3bc8286f3d9e0c72bb319ab131e5dadd76bb767e
