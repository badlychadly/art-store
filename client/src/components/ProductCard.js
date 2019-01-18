import React from 'react'
import {Card, CardImg} from 'reactstrap'


const ProductCard = ({product}) => {
    return (
        <Card className="ProductCard">
            <CardImg top width="100%" title={product.name} src={!!product.picture ? product.picture.cloud.url : product.img_url} alt={product.name} />
        </Card>

    )

}


export default ProductCard;