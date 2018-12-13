import React from 'react';
import { Link } from 'react-router-dom'
import { CardColumns } from 'reactstrap';

import ProductCard from '../components/ProductCard'
import AuthError from '../components//messages/AuthError'
import WelcomeMessage from '../components/messages/WelcomeMessage'
import Messages from './messages/Messages'

import '../Products.css'


const ListProducts = (props) => {
    


      const listProducts = products => {
        return (
            products.map(product => 
            <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
            </Link> 
    ))
      }


    //   debugger;
        return (
            <div>
                {/* { props.sendMessage &&
                    <WelcomeMessage history={props.history} resetMessage={props.resetMessage} sendMessage={props.sendMessage} location={props.location} />
                }
                { (!!props.location.state && props.location.state.error) &&
                <AuthError history={props.history} location={props.location} unTrack={props.unTrack} trackAttempt={props.trackAttempt} attemptedAccess={props.attemptedAccess} />
            } */}
            <Messages history={props.history} resetMessage={props.resetMessage} sendMessage={props.sendMessage} location={props.location} />

                <CardColumns className="ListProducts">
                    {listProducts(props.products)}
                </CardColumns>

            </div>
        )
}

export default ListProducts

