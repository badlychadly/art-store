
export const getInfo = () => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/about').then(resp => resp.json())
        .then(about => {
            dispatch({type: "GET_ABOUT_SUCCESS", about})
        })
    }
}

export const updateInfo = (info) => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/about', {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
        .then(resp => resp.json())
        .then(about => {
            dispatch({type: "UPDATE_ABOUT_SUCCESS", about})
            return about
        })
    }
}