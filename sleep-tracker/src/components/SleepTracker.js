import React, { useState, useEffect } from 'react'

import { getSleepData } from '../action/indexAction'
import { connect } from 'react-redux'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const SleepTracker = () => {
    const [mySleep, setMySleep] = useState([])
    
    useEffect(()=>{
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
        <>
            {mySleep.map(sleep=>{
                return <div>
                <p>Total hours of sleep {sleep.hours}</p>
                {/* <p></p> */}
                </div>
            })}
        </>
    )
}

const mapStateToProps = (
    
    state, ownProps) => {
return ({
        state: state,
        cookies: ownProps.cookies,
    });
};

export default connect(mapStateToProps, { getSleepData })(SleepTracker)
