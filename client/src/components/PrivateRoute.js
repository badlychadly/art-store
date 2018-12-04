import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// PASS IN ERRORCOMPONENT AS PROPS WHEN REDIRECTED 



export default function PrivateRoute({ component: Component, logged_in, trackAttempt, ...rest }) {
    // debugger

    const deniedRedirect = (props) => {
        // debugger;
        // trackAttempt()
        return <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
    }

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
            //   deniedRedirect(props)
            // <Redirect
            //   to={{
            //     pathname: "/",
            //     state: { from: props.location }
            //   }}
            // />
          )
        }
      />
    );
  }