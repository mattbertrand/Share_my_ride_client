export const getRides = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/rides")
        .then(resp => resp.json())
        .then(rides => dispatch({ type: "SET_RIDES", rides }))
    }
}