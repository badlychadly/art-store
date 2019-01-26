
export const getInfo = () => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/about').then(resp => resp.json())
        .then(about => {
            dispatch({type: "GET_ABOUT_SUCCESS", about})
        })
    }
}