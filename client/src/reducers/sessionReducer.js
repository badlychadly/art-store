import initialState from './initialState';



export default function sessionReducer(state = initialState.session, action) {
    switch(action.type) {
      case "LOG_IN_SUCCESS":
        return !!sessionStorage.jwt
      case "LOG_OUT":
      // debugger;
        return !!sessionStorage.jwt
      default: 
        return state;
    }
  }