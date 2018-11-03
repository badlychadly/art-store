import React from 'react'

// PRODUCTS SHOWING UP EMPTY

const ProductShow = (props) => {
    const product = props.products.find(({ id }) => id === props.match.params.productId)
    console.log(props)
    // props.location = {pathname: `/products/${product.id}` }
    return (
        <div>
            Show page
            {/* <h3>{product.name}</h3>
            <img src={product.img_url} alt={product.name}/> */}
        </div>
    )
}

export default ProductShow