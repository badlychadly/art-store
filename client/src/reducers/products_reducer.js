

export default (state = [], action) => {
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return action.products
        case "ADD_PRODUCT":
            return state.concat(action.product)
        case "DELETE_PRODUCT":
            // debugger;
            const products = state.filter(product => product.id !== action.product.id);
            return products 
    
        default:
            return state;
    }
    
}