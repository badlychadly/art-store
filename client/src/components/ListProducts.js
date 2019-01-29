import React from 'react';
import { Link } from 'react-router-dom'
import { CardColumns } from 'reactstrap';

import JumbotronGreet from '../components/JumbotronGreet'
import ProductCard from '../components/ProductCard'
import '../Products.css'


const ListProducts = (props) => {
    
    const listProducts = products => {
        return (
            products.map(product => 
            <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard key={product.id} product={product} />
            </Link> 
            )
        )
    }

        return (
            <div>
                <JumbotronGreet/>
                

                <CardColumns className="ListProducts">
                    {listProducts(props.products)}
                </CardColumns>

            </div>
        )
}

export default ListProducts

