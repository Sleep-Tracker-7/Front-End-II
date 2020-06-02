import { useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const FETCHING_SLEEP_DATA_START = 'FETCHING_SLEEP_DATA_START';
export const FETCHING_SLEEP_DATA_SUCCESS = 'FETCHING_SLEEP_DATA_SUCCESS';
export const FETCHING_SLEEP_DATA_FAILURE = 'FETCHING_SLEEP_DATA_FAILURE';

export const getSleepData = (props) => dispatch => {
    dispatch({ type: FETCHING_SLEEP_DATA_START });

    useEffect(async () => {
        await axiosWithAuth()
            .get('/sleep')
            .then(results =>
                dispatch({
                    type: FETCHING_SLEEP_DATA_SUCCESS,
                    payload: results
                }))
            .catch(error =>
                dispatch({
                    type: FETCHING_SLEEP_DATA_FAILURE,
                    payload: `${error.response.message} with response code ${error.response.code}`
                })
            )
    }, [])
}
