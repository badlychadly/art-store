import React from 'react';
import { Link } from 'react-router-dom'

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

    //   console.log(props.history)
        return (
            <div className="ProductsContainer">
                {listProducts(props.products)} 
            </div>
        )
}

export default ProductsContainer

