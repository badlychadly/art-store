import React from 'react';
import { Link } from 'react-router-dom'
import { CardColumns } from 'reactstrap';

import ProductCard from '../components/ProductCard'
import AuthError from '../components//messages/AuthError'
import WelcomeMessage from '../components/messages/WelcomeMessage'

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



        return (
            <div>
                {/* {!props.attemptedAccess || <AuthError location={props.location} />} */}
                {/* {showAuthError()} */}
                { props.sendWelcome &&
                    <WelcomeMessage history={props.history} sendWelcome={props.sendWelcome} location={props.location} />
                }
                <AuthError history={props.history} location={props.location} unTrack={props.unTrack} trackAttempt={props.trackAttempt} attemptedAccess={props.attemptedAccess} />
                <CardColumns className="ProductsContainer">
                
                {/* {!!props.location.state.error ? <AuthError/> : null} */}

                    {listProducts(props.products)}
            
                </CardColumns>

            </div>
        )
}

export default ProductsContainer

