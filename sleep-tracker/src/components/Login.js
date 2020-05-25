import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="User Name" name="User Name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Password" name="Password" ref={register({required: true, maxLength: 100})} />

      <input type="submit" />
    </form>
  );
}