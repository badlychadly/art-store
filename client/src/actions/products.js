
import ProductsApi from '../api/ProductsApi'


const setProducts = products => {
    return {
        type: "GET_PRODUCTS_SUCCESS",
        products
    }
}


export const getProducts  = () => {
    return dispatch => {

        return ProductsApi.getAllProducts().then(products => dispatch(setProducts(products)))
    }
}

export const addProduct = formData => {
    return dispatch => {
        return ProductsApi.createProduct(formData).then(product => {
            dispatch({type: "ADD_PRODUCT", product})
        })
        .catch(error => console.log(error))
    }
}


export const updateProduct = formData => {
    return dispatch => {
        return ProductsApi.updateProduct(formData).then(product => {
            debugger
        })
    }
}


export const deleteProduct = product => {
    return dispatch => {
        return ProductsApi.deleteProduct(product).then(resp => {
            if (resp.ok) {
                dispatch({type: "DELETE_PRODUCT", product})}
            }
        )
    }
}

export const resetNewProduct = () => {
    return {type: "RESET_NEW_PRODUCT"}
}