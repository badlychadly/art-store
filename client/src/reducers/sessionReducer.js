import initialState from './initialState';



export default function sessionReducer(state = initialState, action) {
    switch(action.type) {
      case "LOG_IN_SUCCESS":
        return {...state, hasToken: !!sessionStorage.jwt, sendMessage: true}
      case "LOG_IN_FAIL":
        return {...state, failedLogin: true}
      case "LOG_OUT":
        return {...state, hasToken: !!sessionStorage.jwt}
      case "RESET_MESSAGE":
        return {...state, sendMessage: false}
      default: 
        return state;
    }
  }