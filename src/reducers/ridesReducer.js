const initialState = {
    rides: [],
    loading: true
}

const ridesReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SET_RIDES':
            return {
                ...state,
                loading: false,
                rides: action.rides
            }
        default:
            return state
    }
}

export default ridesReducer