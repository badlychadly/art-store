import React from 'react';
// import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
// import AdminForm from './AdminForm'

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
                {/* <Route exact path="/admin/login" render={routerProps => <AdminForm {...routerProps} />} />             */}
            </div>
        )
}

export default ProductsContainer

