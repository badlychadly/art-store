import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// PASS IN ERRORCOMPONENT AS PROPS WHEN REDIRECTED 



export default function PrivateRoute({ component: Component, logged_in, ...rest }) {
    // debugger
    return (
      <Route
        {...rest}
        render={props =>
          logged_in ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }