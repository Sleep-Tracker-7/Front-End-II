import axios from 'axios'
// import {axiosWithAUth} from '../utils/axiosWithAuth'

export const FETCHING_SLEEP_DATA_START = 'FETCHING_SLEEP_DATA_START';
export const FETCHING_SLEEP_DATA_SUCCESS = 'FETCHING_SLEEP_DATA_SUCCESS';
export const FETCHING_SLEEP_DATA_FAILURE = 'FETCHING_SLEEP_DATA_FAILURE';

export const getSleepData = () => dispatch => {
    dispatch({ FETCHING_SLEEP_DATA_START });

    axios
        .get('API Location')
        .then(results =>
            dispatch({
                type: FETCHING_SLEEP_DATA_SUCCESS,
                payload: results
            }))
        .catch(error =>
            dispatch({
                type: FETCHING_SLEEP_DATA_FAILURE,
                payload: error
            })
        )
}

//post and put requests here or other?
