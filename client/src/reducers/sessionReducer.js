import initialState from './initialState';



export default function sessionReducer(state = initialState, action) {
    switch(action.type) {
      case "LOG_IN_SUCCESS":
        return {...state, hasToken: !!sessionStorage.jwt, sendMessage: {welcome: true}, isValidated: true}
      case "LOG_IN_FAIL":
        return {...state, failedLogin: true}
      case "LOG_OUT":
      return {...state, hasToken: !!sessionStorage.jwt, sendMessage: {logout: true}, isValidated: false}
      case "UNAUTHORIZED_JWT":
      // debugger;
      return {...state, hasToken: !!sessionStorage.jwt, isValidated: false}
      case "RESET_MESSAGE":
        return {...state, sendMessage: false}
      default: 
        return state;
    }
  }