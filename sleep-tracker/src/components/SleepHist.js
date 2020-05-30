import Histogram from 'react-chart-histogram';
import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';

const SleepHist = ({ sleepData }) => {
    const [sleepHash, setSleepHash] = useState({})
    const [sleepScore, setSleepScore] = useState([]) 
    const [hours, setHours] = useState()

    // useEffect(()=>{
    //     sleepData.forEach(sleep=>{
    //         if sleep.total_hours && sleep.
    //     })
    // },[])

    const labels = ['very bad', 'bad', 'good','very good'];
    const data = [1, 5, 10, 15];
    const options = { fillColor: '#3f51b5', strokeColor: '#3f51b5' };
    return (
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
            <Typography >6 hours of sleep</Typography>
            <Histogram
                xLabels={labels}
                yValues={data}
                width='400'
                height='200'
                options={options}
            />
        </div>
    )
}

export default SleepHist