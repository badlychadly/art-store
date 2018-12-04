import initialState from './initialState';



export default function sessionReducer(state = initialState, action) {
    switch(action.type) {
      case "LOG_IN_SUCCESS":
        return {...state, hasToken: !!sessionStorage.jwt}
      case "LOG_IN_FAIL":
        return {...state, failedLogin: true}
      case "LOG_OUT":
        return {...state, hasToken: !!sessionStorage.jwt}
      case "ROUTE_ERROR":
      return {...state, routeError: true}
      case "RESOLVE_ERROR":
      // debugger;
        return {...state, routeError: false}
      default: 
        return state;
    }
  }