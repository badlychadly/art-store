
export const getInfo = () => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/about').then(resp => {
            debugger;
        })
    }
}