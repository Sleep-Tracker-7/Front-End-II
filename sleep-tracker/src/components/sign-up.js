import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, min: 2, maxLength: 80})} />
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, min: 2, maxLength: 100})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, min: 5, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="User Name" name="User Name" ref={register({required: true, maxLength: 12})} />
      <input type="text" placeholder="Password" name="Password" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}
