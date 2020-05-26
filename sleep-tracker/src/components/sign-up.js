<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('Registration Successful!');
		console.log(this.state);
		this.setState({
			fullname: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="fullname"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email address"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>

					<div className="password">
						<input type="password" placeholder="Confirm Password" name="password1" />
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/">Login Here</Link>
			</div>
		);
	}
}

export default Sign-up;
=======
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
>>>>>>> 3bc8286f3d9e0c72bb319ab131e5dadd76bb767e
