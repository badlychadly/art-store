import sessionApi from '../api/SessionApi'


export function loginSuccess() {  
    return {type: "LOG_IN_SUCCESS"}
  }

  export function logInUser(credentials) {  
    return function(dispatch) {
      return sessionApi.login(credentials).then(response => {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
      }).catch(error => {
        throw(error);
      });
    };
  }


  export function logOutUser() {  
    sessionStorage.removeItem('jwt');
    return {type: "LOG_OUT"}
  }