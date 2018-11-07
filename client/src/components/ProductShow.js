import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';


const ProductShow = (props) => {
    // debugger;
    
    const product = props.products.find(({ id }) => String(id) === props.match.params.productId)
    // console.log(props)
    return props.products.length ? (
        <div>
            Show page
            <h3>{product.name}</h3>
            <img src={product.img_url} alt={product.name}/>
            <Link to=''> 
                <Button onClick={() => props.deleteProduct(product)} color="danger">danger</Button>{' '}
            </Link>
        </div>
    ) : <p>loading</p>
}

export default ProductShow