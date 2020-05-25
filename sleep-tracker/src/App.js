import React from 'react';
import { useForm } from 'react-hook-form';
import Login from './components/Login';


export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   test
    </form>
  );
} 