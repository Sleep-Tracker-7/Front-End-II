import React from 'react'
import DatetimeRangePicker from 'react-datetime-range-picker';
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddSleepData extends React.Component {
    constructor() {
        super()
        this.state = {
            // id: 0,
            score_wake: 0.0,
            score_day: 0.0,
            score_night: 0.0,
            hours: 0.0,
            start: 0,
            end: 0,
        }
        this.message = {
            message: 'Please enter your sleep data'
        }
    }

    routeChange = () => {
        let path = `/sleep-tracker`;
        let history = useHistory();
        history.push(path);
    }

    updateSleepTime = dateSelection => {
        this.setState({ start: dateSelection.start })
        this.setState({ end: dateSelection.end })
        if (this.state.start !== 0 || this.state.end !== 0) {
            this.setState({ hours: ((([this.state.end.getTime()] - [this.state.start.getTime()])) / 3525000).toFixed(1) })
        }
        console.log(this.state.hours)
    }

    update = e => {
        let nam = e.target.name;
        let val = e.target.value;

        if (nam.includes('score')) {
            this.setState({ [nam]: val * 1 });
        } else {
            this.setState({ [nam]: val });
        }
        console.log(this.state)
    }

    addSleepData = e => {
        e.preventDefault()

        if (this.state.score_wake === 0 || this.state.score_day === 0 || this.state.score_night === 0 || this.state.hours === 0) {
            this.setState({ message: 'Please enter all sleep values' });
        } else {
            axiosWithAuth()
                .post('/sleep', this.state)
                .then(
                    res => console.log('.then', res)
                )
                .catch(err => console.log('.catch', err))
        }
        console.log(this.state)
    }

    render() {
        return (
            <div className='add-sleep-page'>
                <form className='add-sleep-form'>
                    <h3>Add Sleep Data</h3>
                    {/* Sleep time Start */}
                    <div className='start-time'>
                        <DatetimeRangePicker
                            onChange={this.updateSleepTime}
                        />
                    </div>
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
                    <span className='error'>{this.state.message}</span>
                </form>
            </div>
        )
    }
}

export default AddSleepData;
