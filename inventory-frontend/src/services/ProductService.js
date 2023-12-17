import axios from 'axios';

const Product_API_BASE_URL = "http://localhost:8080/api/v2/products";

class ProductService {

    getProducts(){
        return axios.get(Product_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(Product_API_BASE_URL, product);
    }

    getProductById(productId){
        return axios.get(Product_API_BASE_URL +'/'+productId);
    }

    updateProduct(product, productId){
        return axios.put(Product_API_BASE_URL+ '/'+ productId, product);
    }
    deleteProduct(productId){
        return axios.delete(Product_API_BASE_URL +'/'+productId);
    }
}

export default new ProductService()