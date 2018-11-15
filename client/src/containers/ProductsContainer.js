import React from 'react';
import { Link } from 'react-router-dom'
import { CardColumns } from 'reactstrap';

import ProductCard from '../components/ProductCard'
import '../Products.css'


const ProductsContainer = (props) => {
    
    




      const listProducts = products => {
        return (
            products.map(product => 
            <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
            </Link> 
    ))
      }

        return (
            <CardColumns className="ProductsContainer">
            
                {listProducts(props.products)}
           
            </CardColumns>
            // <div className="ProductsContainer">
            //     {listProducts(props.products)} 
            // </div>
        )
}

export default ProductsContainer

