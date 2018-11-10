import sessionApi from '../api/SessionApi'


export function loginSuccess() {  
    return {type: "LOG_IN_SUCCESS"}
  }

  export function logInUser(credentials, history) {  
    return function(dispatch) {
      return sessionApi.login(credentials).then(response => {
        debugger;
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
        !response.jwt || history.push('/')
      }).catch(error => {
        throw(error);
      });
    };
  }


  export function logOutUser() {  
    sessionStorage.removeItem('jwt');
    return {type: "LOG_OUT"}
  }