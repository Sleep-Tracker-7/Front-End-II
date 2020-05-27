import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const SleepTracker = () => {

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
