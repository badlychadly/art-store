

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
        // debugger;
        // products = state.filter(product => product.id !== action.product.id)
        let productIndex = state.products.findIndex(product => {
            return product.id === action.product.id
        })

        
        // debugger;
            // products = state.products.filter(product => product.id !== action.product.id)
            return {...state,
                products: [...state.products.slice(0, productIndex), {...action.product}, ...state.products.slice(productIndex + 1) ]
               
               }
            // return {...state, products: products.splice(productIndex, 0, )}
        case "RESET_NEW_PRODUCT":
            return {...state, newProduct: {}}
    
        default:
            return state;
    }
    
}