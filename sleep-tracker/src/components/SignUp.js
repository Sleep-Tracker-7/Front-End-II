import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

// Renamed this file for consistency across the App

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			username: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	displayLogin(e) {
		e.preventDefault();
		axiosWithAuth()
			.post('/auth/register')
			.then(res => console.log('Signup res: ', res))
			.catch(error => console.log('Error is: ', error))

		// this.setState({
		// 	fullname: '',
		// 	username: '',
		// 	password: ''
		// });
	}

	render() {
		return (
			<div className="signup-page">
				<form className='signup-form' onSubmit={this.displayLogin}>
					<h2>Register</h2>
					<input
						type="text"
						placeholder="Full Name"
						name="fullname"
						value={this.state.fullname}
						onChange={this.update}
					/>
					<input
						type="text"
						placeholder="Username"
						name="username"
						value={this.state.userName}
						onChange={this.update}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={this.state.password}
						onChange={this.update}
					/>
					{/* <input
						type="password"
						placeholder="Confirm Password"
						name="password1"
						value={this.state}
						onChange={}
					/> */}
					<button>Sign Up</button>
				</form>

				{/* <Link to="/">Login Here</Link> */}
			</div>
		);
	}
}

export default SignUp;
