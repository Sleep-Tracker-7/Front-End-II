import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
			.post('/auth/register', this.state)
			.then(res => {
				console.log('Signup res: ', res)
			})
			.catch(error => console.log('Error is: ', error))

		this.setState({
			username: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="signup-page">
				<form className='signup-form' onSubmit={this.displayLogin}>
					<h2>Register</h2>
					<input
						type="text"
						placeholder="Username"
						name="username"
						value={this.state.username}
						onChange={this.update}
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={this.state.password}
						onChange={this.update}
					/>
					<button>Sign Up</button>
				</form>
			</div>
		);
	}
}

export default SignUp;
