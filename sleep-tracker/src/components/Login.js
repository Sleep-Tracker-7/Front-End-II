import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

import '../App.css'
class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/auth/login', this.state.credentials)
            .then(results => {
                localStorage.setItem('token', results)
                console.log('Login.js', results)
                this.props.history.push('/sleep-tracker')
            })
            .catch(error => {
                console.log('Error is: ', error)
            })
    }

    render() {
        return (
            <div className='login-page'>
                <form className='login-form' onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button className='button'>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;
