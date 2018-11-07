

const setProducts = products => {
    return {
        type: "GET_PRODUCTS_SUCCESS",
        products
    }
}


export const getProducts  = () => {
    return dispatch => {
        return fetch("http://10.0.0.99:3001/products")
        .then(resp => resp.json())
        .then(products => dispatch(setProducts(products)))
    }
}

export const addProduct = formData => {
    return dispatch => {
        return fetch('http://10.0.0.99:3001/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(product => {
            dispatch({type: "ADD_PRODUCT", product})
        })
        .catch(error => console.log(error))
    }
}


export const deleteProduct = product => {
    // debugger;
    return dispatch => {
        return fetch(`http://10.0.0.99:3001/products/${product.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(resp => dispatch({type: "DELETE_PRODUCT", product}))
        // .then(data => console.log(data))
    }
}