import initialState from './initialState';
// import {browserHistory} from 'react-router-dom';



export default function sessionReducer(state = initialState.session, action) {
    switch(action.type) {
      case "LOG_IN_SUCCESS":
    //   debugger;
        // browserHistory.push('/')
        return !!sessionStorage.jwt
    //   case types.LOG_OUT:
    //     browserHistory.push('/')
    //     return !!sessionStorage.jwt
      default: 
        return state;
    }
  }