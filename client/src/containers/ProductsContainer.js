import React from 'react';
import { Link } from 'react-router-dom'
import { CardColumns } from 'reactstrap';

import ProductCard from '../components/ProductCard'
import AuthError from '../components/AuthError'

import '../Products.css'


const ProductsContainer = (props) => {
    
    

// debugger;
// console.log(props.location.state)


      const listProducts = products => {
        return (
            products.map(product => 
            <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
            </Link> 
    ))
      }

    //   const showAuthError = () => {
    //       if (!!props.location.state && props.location.state.error) {
    //           debugger;
    //         // props.unTrack()
    //           props.trackAttempt()
    //       }
          
    //       return !props.attemptedAccess || <AuthError location={props.location} unTrack={props.unTrack} />
    //   }

        return (
            <div>
                {/* {!props.attemptedAccess || <AuthError location={props.location} />} */}
                {/* {showAuthError()} */}
                <AuthError history={props.history} location={props.location} unTrack={props.unTrack} trackAttempt={props.trackAttempt} attemptedAccess={props.attemptedAccess} />
                <CardColumns className="ProductsContainer">
                
                {/* {!!props.location.state.error ? <AuthError/> : null} */}

                    {listProducts(props.products)}
            
                </CardColumns>

            </div>
            // <div className="ProductsContainer">
            //     {listProducts(props.products)} 
            // </div>
        )
}

export default ProductsContainer

