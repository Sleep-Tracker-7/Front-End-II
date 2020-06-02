import {
    FETCHING_SLEEP_DATA_START,
    FETCHING_SLEEP_DATA_SUCCESS,
    FETCHING_SLEEP_DATA_FAILURE
} from '../action/indexAction'

const initialState = {
    sleepData: null,
    isFetching: false,
    error: ''
}

export const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SLEEP_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_SLEEP_DATA_SUCCESS:
            return {
                ...state,
                sleepData: action.payload,
                isFetching: false
            }
        case FETCHING_SLEEP_DATA_FAILURE:
            return {
                ...state,
                error: 'Hit an error',
                isFetching: false
            }
        default:
            return state
    }
}
