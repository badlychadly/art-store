

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