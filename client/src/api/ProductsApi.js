class ProductsApi {


    static requestHeaders() {
        return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    }


    static getAllProducts() {
        return fetch("http://10.0.0.99:3001/products")
        .then(resp => resp.json())
    }


    static createProduct(formData) {
        // debugger;
        // const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders())
        let data = new FormData()
        // debugger;
        data.append('name', formData.name)
        data.append('price', formData.price)
        data.append('description', formData.description)
        data.append('img_url', formData.img_url)
        data.append('picture', formData.picture)
        data.append('prints', formData.prints)
        return fetch('http://10.0.0.99:3001/products', {
            method: "POST",
            // headers: headers,
            // body: JSON.stringify(formData)
            body: data
        })
        .then(resp => {
            // debugger;
            return resp.json()
        })
    }


    static updateProduct(product) {
        const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
        return fetch(`http://10.0.0.99:3001/products/${product.id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(product)
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