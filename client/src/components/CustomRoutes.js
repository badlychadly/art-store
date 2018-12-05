import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// ADD CUSTOM ROUTE FOR SUCCESSFUL LOGIN


export function PrivateRoute({ component: Component, logged_in, trackAttempt, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          logged_in ? (
            <Component {...props} />
          ) : ( 
              <Redirect to={{
                  pathname: '/',
                  state: {
                    from: props.location, error: true
                  }
              }} />
          )
        }
      />
    );
  }


  export function AdminLoginRoute({ component: Component, logged_in, ...rest}) {
    return (
      <Route exact path="/admin/login" 
      render={routerProps => 
        logged_in ? (
        <Redirect to={{
          pathname: '/',
          state: {
            from: routerProps.location, loginSuccess: true
          }
        }}/> 
      ) : (
      <Component logged_in={logged_in} {...routerProps} />)} /> 
    )
  }