import React from 'react'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const SleepTracker = () => {
    axiosWithAuth()
        .get(`/sleep/`)
        .then(res => console.log(res))
        // .then(results => {
        //     localStorage.setItem('token', results)
        //     console.log('SleepTracker.js', results)
        // })
        .catch(error => console.log('Error is: ', error))


    return (
        <div className='sleeptracker-page'>
            <h1>Header</h1>
        </div>
    )
}

export default SleepTracker