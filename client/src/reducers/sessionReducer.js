import initialState from './initialState';



export default function sessionReducer(state = initialState, action) {
  // debugger;
    switch(action.type) {
      case "LOG_IN_SUCCESS":
      // debugger;
        return {...state, session: !!sessionStorage.jwt}
      case "LOG_IN_FAIL":
        return {...state, failedLogin: !state.failedLogin}
      case "LOG_OUT":
      // debugger;
        return !!sessionStorage.jwt
      default: 
        return state;
    }
  }