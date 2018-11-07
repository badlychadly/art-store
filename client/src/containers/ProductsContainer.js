import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { getProducts } from '../actions/products'
import ProductCard from '../components/ProductCard'
// import ProductShow from '../components/ProductShow'
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
            <div className="ProductsContainer">
                {listProducts(props.products)}                
            </div>
        )
}

export default ProductsContainer

