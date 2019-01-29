

export default (state = {
    about: ''
},
action) => {
    switch (action.type) {
        case "GET_ABOUT_SUCCESS":
            return action.about
        case "UPDATE_ABOUT_SUCCESS":
            return action.about
    
        default:
            return state
    }
}