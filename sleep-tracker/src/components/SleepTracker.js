import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { getSleepData } from '../action/indexAction'
import { connect } from 'react-redux'

const SleepTracker = () => {

    axiosWithAuth()
        .get('/sleep/')
        .then(results => {
            localStorage.setItem('token', results)
            console.log('SleepTracker.js', results)
        })
        .catch(error => console.log('Error is: ', error))

    return (
        <div>SleepTracker.js</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return ({
        state: state,
        cookies: ownProps.cookies,
    });
};

export default connect(mapStateToProps, { getSleepData })(SleepTracker)