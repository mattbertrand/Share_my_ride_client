export const getRides = () => {
    return dispatch => {
        dispatch({ type: 'LOADING'})
        fetch(resp => resp.json())
        .then(rides => dispatch({ type: 'SET_RIDES', rides }))
    }
}