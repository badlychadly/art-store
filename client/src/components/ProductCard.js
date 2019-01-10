import React from 'react'
import {Card, CardImg} from 'reactstrap'


const ProductCard = ({product}) => {
    // debugger
    return (
        <Card className="ProductCard">
            <CardImg top width="100%" title={product.name} src={!!product.picture ? product.picture.cloud.url : product.img_url} alt={product.name} />
            {/* <CardImg top width="100%" title={product.name} src={product.img_url} alt={product.name} /> */}
        </Card>
    
    
        // <div className="ProductCard">
        // <img className="ProductImage" title={product.name} src={product.img_url} alt={product.name}/>
        // </div>
    )

}


export default ProductCard;