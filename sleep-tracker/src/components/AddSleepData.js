import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import Pickers from '@material-ui/pickers'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import SleepTime from './SleepTime'

class AddSleepData extends React.Component {
    constructor() {
        super()

        this.state = {
            score_wake: 0.0,
            score_day: 0.0,
            score_night: 0.0,
            hours: 0.0,
            start: 0.0,
            end: 0.0,
            error: 'Please enter your sleep data'
        }
    }

    updateStart = start => {
        this.setState({ start })
    }

    updateEnd = end => {
        this.setState({ end })
    }

    update = e => {
        let nam = e.target.name;
        let val = e.target.value;

        if (nam.includes('score')) {
            this.setState({ [nam]: val * 1 });
        } else {
            this.setState({ [nam]: val });
        }
    }

    addSleepData = e => {
        e.preventDefault()

        if (this.state.score_wake === 0 || this.state.score_day === 0 || this.state.score_night === 0 || this.state.hours === 0) {
            this.setState({ error: 'Please enter all sleep values' });
        } else {
            axiosWithAuth()
                .post('/sleep')
                .then(res => console.log(res))
                .catch(err => console.log('Error is: ', err))
        }
        // console.log(this.state)
    }

    render() {
        return (
            <div className='add-sleep-page'>
                <form className='add-sleep-form'>
                    <h3>Add Sleep Data</h3>
                    <SleepTime />
                    {/* Sleep time Start */}
                    <TimePicker className='clock'
                        disableClock={true}
                        name='start'
                        onChange={this.updateStart}
                        value={this.state.start}
                    />
                    {/* Sleep time End */}
                    <TimePicker className='clock'
                        disableClock={true}
                        name='end'
                        onChange={this.updateEnd}
                        value={this.state.end}
                    />
                    {/* Emoji faces Wake */}
                    <select name='score_wake' onChange={this.update}>
                        <option value={0}>Pick Mood</option>
                        <option value={.25}>Very Bad</option>
                        <option value={0.5}>Bad</option>
                        <option value={.75}>Good</option>
                        <option value={1.0}>Very Good</option>
                    </select>
                    {/* Emoji faces Day*/}
                    <select name='score_day' onChange={this.update}>
                        <option value={0}>Pick Mood</option>
                        <option value={.25}>Very Bad</option>
                        <option value={0.5}>Bad</option>
                        <option value={.75}>Good</option>
                        <option value={1.0}>Very Good</option>
                    </select>
                    {/* Emoji faces Night*/}
                    <select name='score_night' onChange={this.update}>
                        <option value={0}>Pick Mood</option>
                        <option value={.25}>Very Bad</option>
                        <option value={0.5}>Bad</option>
                        <option value={.75}>Good</option>
                        <option value={1.0}>Very Good</option>
                    </select>
                    <button onClick={this.addSleepData}>Add Sleep</button>
                    <span className='error'>{this.state.error}</span>
                </form>
            </div>
        )
    }
}

export default AddSleepData;
