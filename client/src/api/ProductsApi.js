class ProductsApi {


    static requestHeaders() {
        return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    }


    static getAllProducts() {
        return fetch("http://10.0.0.99:3001/products")
        .then(resp => resp.json())
    }


    static createProduct(formData) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders())
        return fetch('http://10.0.0.99:3001/products', {
            method: "POST",
            headers: headers,
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
    }


    static updateProduct(formData) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        return fetch('http://10.0.0.99:3001/products', {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
    }


    static deleteProduct(product) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    
    return fetch(`http://10.0.0.99:3001/products/${product.id}`, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(product)
    })
    }
    


}

export default ProductsApi