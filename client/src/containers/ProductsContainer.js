import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

// import { getProducts } from '../actions/products'
import ProductCard from '../components/ProductCard'
// import ProductShow from '../components/ProductShow'
import '../Products.css'


class ProductsContainer extends Component {
    

      componentDidMount() {
       this.props.getProducts()
      }


      listProducts = products => {
        return (
            products.map(product => 
            <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
            </Link> 
    ))
      }


    render() {
        return (
            <div className="ProductsContainer">
                {this.listProducts(this.props.products)}
        {/* <Route path={`/products/:productId`} component={ProductShow} /> */}
                
            </div>
        )
    }
}

export default ProductsContainer

// const mapStateToProps = (state) => {
//     return ({
//         products: state.products
//     })
// }

// export default connect(mapStateToProps, { getProducts })(ProductsContainer);