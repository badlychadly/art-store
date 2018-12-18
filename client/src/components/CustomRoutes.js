import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// ADD CUSTOM ROUTE FOR SUCCESSFUL LOGIN


export function PrivateRoute({ component: Component, newProduct, isValidated, logged_in, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          // debugger;
          if (logged_in && !!newProduct.id) {
            return <Redirect to={`/products/${newProduct.id}`} />
            // return <Component {...props} />
          } else if (logged_in && isValidated) {
            return <Component {...props} />
          } else {
            return <Redirect to={{
              pathname: '/',
              state: {
                from: props.location, error: true
              }
          }} />
          }
      

        }
           
              
          
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
          pathname: '/'
        }}/> 
      ) : (
      <Component logged_in={logged_in} {...routerProps} />)} /> 
    )
  }