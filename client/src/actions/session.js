import sessionApi from '../api/SessionApi'


export function loginSuccess() {  
    return {type: "LOG_IN_SUCCESS"}
  }

  export function logInUser(credentials, history) {  
    return function(dispatch) {
      return sessionApi.login(credentials).then(response => {
        if (!!response.jwt) {
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSuccess());
        } else {
          dispatch({type: "LOG_IN_FAIL"})
        }
        // return response.jwt
      })
      .catch(error => {
        debugger;
      });
    };
  }


  export function logOutUser() {
    return dispatch => {
      return sessionApi.logout().then(resp => resp.json())
      .then(data => {
        sessionStorage.removeItem('jwt');
        return dispatch({type: "LOG_OUT"})

      })
    }  
  }

  export function verifyAdmin() {
    return function(dispatch) {
      return sessionApi.verifyAdmin().then(response => {
        if (!response.ok) {
          // debugger;
          sessionStorage.removeItem('jwt')
          return dispatch({type: "UNAUTHORIZED"})
        } else {
          return dispatch({type: "AUTHORIZED"})
        }
        // return response.json()
      })
    }
  }


  export function resetMessage() {
    return {type: 'RESET_MESSAGE'}
  }