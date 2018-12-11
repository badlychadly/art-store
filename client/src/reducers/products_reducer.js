

export default (state = {
    products: [],
    newProduct: {}
}
, action) => {
    let products
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
        return {...state, products: action.products}
        case "ADD_PRODUCT":
        // debugger;
            return {...state, products: state.products.concat(action.product), newProduct: action.product}
        case "DELETE_PRODUCT":
            products = state.products.filter(product => product.id !== action.product.id);
            return {...state, products: products} 
        case "UPDATE_PRODUCT":
        // products = state.filter(product => product.id !== action.product.id)
            products = [...state.products.filter(product => product.id !== action.product.id), action.product]
            
            return {...state, products: products}
    
        default:
            return state;
    }
    
}