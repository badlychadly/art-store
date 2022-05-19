
export const getInfo = () => {
    debugger;
    return dispatch => {
        return fetch('http://10.0.0.156:3001/about').then(resp => resp.json())
        .then(about => {
            dispatch({type: "GET_ABOUT_SUCCESS", about})
        })
    }
}

export const updateInfo = (info) => {
    const headers = Object.assign({'Content-Type': 'application/json'}, {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`})
    return dispatch => {
        return fetch('http://10.0.0.156:3001/about', {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(info)
        })
        .then(resp => resp.json())
        .then(about => {
            dispatch({type: "UPDATE_ABOUT_SUCCESS", about})
            return about
        })
    }
}