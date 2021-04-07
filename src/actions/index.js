export const getRides = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/rides")
        .then(resp => resp.json())
        .then(rides => dispatch({ type: "SET_RIDES", rides }))
    }
}

export const addRide = (ride, history) => {
    return dispatch => {
        fetch("http://localhost:3001/rides", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ ride })
        })
        .then(resp => resp.json())
        .then(ride => {
            dispatch({ type: "ADD_RIDE", ride })
        history.push("/rides")
        })
    }
}