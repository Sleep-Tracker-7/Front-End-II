import React from 'react';
import { useForm } from 'react-hook-form';

import { AddSleepData } from './components/AddSleepData'
import Login from './components/Login'

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
      <Login />
      <AddSleepData />
      <form onSubmit={handleSubmit(onSubmit)}>
        test
    </form>
    </div>
  );
}

// npm install react-hook-form
// npm install react-router-dom
// npm install axios
// npm install redux
// npm install react-redux
// npm install --save redux-thunk
// npm install --save react-middleware
// npm install --save-dev redux-devtools