class SessionApi {
  static login(credentials) {
    // const request = new Request('http://10.0.0.99:3001/login', {
    //   method: 'POST',
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   }), 
    //   body: JSON.stringify({auth: credentials})
    // });

      return fetch('http://10.0.0.99:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({auth: credentials})
    })
    .then(resp => resp.json())
    .catch(error => error)
    // .then(data => data)
  
  
      // return fetch(request).then(response => {
      //   return response.json();
      // }).catch(error => {
      //   return error;
      // });
    } 
  }
  
  export default SessionApi;