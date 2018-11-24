import React from 'react'


const ProductInput = (props) => {

    return (
        <React.Fragment>
            <form>
            <input className="editInput text-center" type="text" autoFocus name={props.name} value={props.product.name}/>

            </form>
        </React.Fragment>
    )
}

export default ProductInput