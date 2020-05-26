import React from 'react'
import { useForm } from 'react-hook-form'
import {connect} from 'react-redux'
import { getSleepData } from '../action/indexAction'
import axios from 'axios'


export const AddSleepData = () => {
    return (
        <div>
            <h1>AddSleepData.js H1</h1>
            <form>
                {/* Sleep time */}
                {/* Emoji faces */}
                {/* Wake time */}
                {/* Emoji faces */}
                {/* Daily mood */}
                {/* Emoji faces */}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('Person.js mapStateToProps: ', state)
    return {
      sleepData: state.sleepData,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps, { getSleepData })(AddSleepData);
