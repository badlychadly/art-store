

export default (state = {
    about: ''
},
action) => {
    switch (action.type) {
        case "GET_ABOUT_SUCCESS":
        debugger;
            return action.about
    
        default:
            return state
    }
}