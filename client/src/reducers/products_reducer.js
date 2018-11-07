

export default (state = [], action) => {
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return action.products
        case "ADD_PRODUCT":
            return state.concat(action.product)
        case "DELETE_PRODUCT":
            const products = state.products.filter(product => product.id !== action.id);
            return { ...state, products}
    
        default:
            return state;
    }
    
}