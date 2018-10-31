

export default (state = [], action) => {
    switch (action.type) {
        case "GET_PRODUCTS_SUCCESS":
            return action.products
        case "ADD_PRODUCT":
            return state.concat(action.product)
    
        default:
            return state;
    }
    
}