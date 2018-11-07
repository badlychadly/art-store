import React from 'react'
import { Button } from 'reactstrap';


const ProductShow = (props) => {
    // debugger;
    
    const product = props.products.find(({ id }) => String(id) === props.match.params.productId)
    console.log(props)
    return props.products.length ? (
        <div>
            Show page
            <h3>{product.name}</h3>
            <img src={product.img_url} alt={product.name}/>
            <Button color="danger">danger</Button>{' '}
        </div>
    ) : <p>loading</p>
}

export default ProductShow