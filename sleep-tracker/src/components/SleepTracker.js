import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import AddSleepData from './AddSleepData'

const SleepTracker = () => {
    const [mySleep, setMySleep] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/sleep/')
            .then(results => {
                localStorage.setItem('token', results)
                console.log('SleepTracker.js', results)
                setMySleep(results.data)
            })
            .catch(error => console.log('Error is: ', error))
    }, [])


    return (
        <div className='sleeptracker-page'>
            <AddSleepData />
            {mySleep.map(sleep => {
                return <div>
                    <p>Total hours of sleep {sleep.hours}</p>
                    {/* <p></p> */}
                </div>
            })}
        </div>
    )
}

export default SleepTracker
