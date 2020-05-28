import {
    FETCHING_SLEEP_DATA_START,
    FETCHING_SLEEP_DATA_SUCCESS,
    FETCHING_SLEEP_DATA_FAILURE
} from '../action/indexAction'

// import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    name: ''
    //Need data shape to complete
}

export const indexReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_SLEEP_DATA_START:
            console.log('Fetching')
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_SLEEP_DATA_SUCCESS:
            console.log('Success')
            return {
                ...state,
                isFetching: false
            }
        case FETCHING_SLEEP_DATA_FAILURE:
            console.log('Failure')
            return {
                ...state,
                isFetching: false
            }
        default:
            console.log('Default')
            return state
    }
}
