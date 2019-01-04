import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// ADD CUSTOM ROUTE FOR SUCCESSFUL LOGIN


export function PrivateRoute({ component: Component, newProduct, isValidated, logged_in, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          if (logged_in && !!newProduct.id) {
            return <Redirect to={`/products/${newProduct.id}`} />
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

  
  export function ShowProductRoute({component: Component, path, logged_in, products, newProduct, resetNewProduct, deleteProduct, isValidated, ...rest}) {
    // debugger
    let {computedMatch} = rest
    let product = products.find(({ id }) => {
      // WHEN URL CHANGES MATCH.PARAMS.PRODUCTID IS "NEW" INSTEAD OF PRODUCT.ID
      // debugger;
      return String(id) === computedMatch.params.productId
  })
  // debugger;

//   let nextProduct = products.find(({ id }) => {
//     // WHEN URL CHANGES MATCH.PARAMS.PRODUCTID IS "NEW" INSTEAD OF PRODUCT.ID
//     // debugger;
//     return String(id) === computedMatch.params.productId
// })

    return (
      <Route path={path} {...rest} render={routerProps => (<Component product={product} products={products} newProduct={newProduct} resetNewProduct={resetNewProduct} deleteProduct={deleteProduct} logged_in={logged_in} isValidated={isValidated} {...routerProps} />)} />
      
    )
  }