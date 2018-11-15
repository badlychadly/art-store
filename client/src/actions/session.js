import sessionApi from '../api/SessionApi'


export function loginSuccess() {  
    return {type: "LOG_IN_SUCCESS"}
  }

  export function logInUser(credentials, history) {  
    return function(dispatch) {
      return sessionApi.login(credentials).then(response => {
        // debugger;
        if (!!response.jwt) {
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSuccess());
        } else {
          dispatch({type: "LOG_IN_FAIL"})
        }
        // return response.jwt
      })
      // .catch(error => {
      //   debugger;
      // });
    };
  }


  export function logOutUser() {  
    sessionStorage.removeItem('jwt');
    return {type: "LOG_OUT"}
  }