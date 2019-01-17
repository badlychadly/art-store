import React from 'react'
import { Button  } from 'reactstrap';
import { Link } from 'react-router-dom'



const AuthButtons = (props) => {
    return (
        <div>
            <Button size="sm" hidden={!props.isValidated} color="warning" tag={Link} to={{
                pathname: `/products/${props.product.id}/edit`,
                state: {isEdit: true}
            }} >
                edit Content
            </Button>
            <Link to={{pathname: '/', state: {confirmDelete: true}}}> 
              <Button size="sm" hidden={!props.isValidated} onClick={() => props.deleteProduct(props.product)} color="danger">Delete</Button>
                            
            </Link>
        </div>
    )
}

export default AuthButtons