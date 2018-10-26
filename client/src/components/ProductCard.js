import React from 'react'


const ProductCard = ({product}) => (
    <div className="ProductCard">
    <img className="ProductImage" title={product.name} src={product.img_url} alt={product.name}/>
    </div>
)


export default ProductCard;