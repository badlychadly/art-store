import React from 'react'

// PRODUCTS SHOWING UP EMPTY

const ProductShow = (props) => {
    // debugger;
    
    const product = props.products.find(({ id }) => String(id) === props.match.params.productId)
    // debugger
    // console.log(props)
    // props.location = {pathname: `/products/${product.id}` }
    return props.products.length ? (
        <div>
            Show page
            <h3>{product.name}</h3>
            <img src={product.img_url} alt={product.name}/>
        </div>
    ) : <p>loading</p>
}

export default ProductShow