const initialState = {
    counter: 0,
    apiData: {},
    items: [],
    isPending: false,
    hasFailed: false,
    hasSucceeded: false
}

const reducer = (state = initialState, action) => {
        if(action.type === 'INCREMENT') {
            return {
                counter: state.counter + 1
            }
        }
        if(action.type === 'DECREMENT') {
            return {
                counter: state.counter - 1
            }
        }
    if(action.type === 'SAGA_INCREASE_BY_FIVE') {
        return {
            counter: state.counter + 5
        }
    }
    if(action.type === 'LAUNCH_API') {
        return {
            ...state,
            isPending: true, 
            hasFailed: false,
            hasSucceeded: false
        }
    }
    if(action.type === 'API_FETCH_SUCCESS') {
        return {
            ...state,
            hasFailed: false,
            isPending: false,
            apiData: action.payload,
            hasSucceeded: true
        }
    }
    if(action.type === 'API_FETCH_FAILURE') {
        return {
            ...state, 
            hasFailed: true,
            isPending: false,
            hasSucceeded: false
        }
    }
    if(action.type === 'addItem') {
        return state.concat([action.data]);
    }
    return state; 
}

export default reducer; 