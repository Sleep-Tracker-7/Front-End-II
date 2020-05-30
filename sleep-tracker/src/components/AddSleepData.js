import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'

import { axiosWithAuth } from '../utils/axiosWithAuth'

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
            error: ''
        }
    }

    updateStart = start => {
        this.setState({ start })
    }

    updateEnd = end => {
        this.setState({ end })
    }

    update = e => {
        console.log(e.target)
        let nam = e.target.name;
        let val = e.target.value;
        let err = ''

        if (nam === 'score_day' || nam === 'score_wake' || nam === 'score_night') {
            if (val === 0) {
                err = <strong>Select a mood</strong>;
            }
        }
        this.setState({ error: err });

        if (nam.includes('score')) {
            this.setState({ [nam]: val * 1 });
        } else {
            this.setState({ [nam]: val });
        }
        // console.log(this.state)
    }

    addSleepData = e => {
        e.preventDefault()
        var start = Date

        axiosWithAuth()
            .post()
            .then()
            .catch()

        console.log(this.state)
    }

    render() {
        return (
            <div className='add-sleep-page'>
                <form className='add-sleep-form'>
                    <h3>Add Sleep Data</h3>
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
                        <option value={.25}>Poor</option>
                        <option value={0.5}>Fair</option>
                        <option value={.75}>Good</option>
                        <option value={1.0}>Great</option>
                    </select>
                    {/* Emoji faces Day*/}
                    <select name='score_day' onChange={this.update}>
                        <option value={0}>Pick Mood</option>
                        <option value={.25}>Poor</option>
                        <option value={0.5}>Fair</option>
                        <option value={.75}>Good</option>
                        <option value={1.0}>Great</option>
                    </select>
                    {/* Emoji faces Night*/}
                    <select name='score_night' onChange={this.update}>
                        <option value={0}>Pick Mood</option>
                        <option value={.25}>Poor</option>
                        <option value={0.5}>Fair</option>
                        <option value={.75}>Good</option>
                        <option value={1.0}>Great</option>
                    </select>
                    <button onClick={this.addSleepData}>Add Sleep</button>
                </form>
            </div>
        )
    }
}

export default AddSleepData;
