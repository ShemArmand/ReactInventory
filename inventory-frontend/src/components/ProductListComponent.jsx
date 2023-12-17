import React, { Component } from 'react';
import ProductService from '../services/ProductService'; 


class ProductListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: []
        }
    
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProducts().then((res) =>{
            this.setState({ products: res.data});
        });
    }
    deleteProduct(id){
        ProductService.deleteProduct(id).then( res =>{
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }
    addProduct(){
        this.props.history.push('/add-product');
    }
    editProduct(id){
        this.props.history.push(`/update-product/${id}`);
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Product List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addProduct}>Add a product</button>
                </div>
                <div className ="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product ID </th>
                                <th> Product name </th>
                                <th> Description </th>
                                <th> Unit Price </th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                this.state.products.map(
                                    product =>
                                    <tr key ={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <button onClick= { () => this.editProduct(product.id)} className='btn btn-info'>Update</button>
                                            <button style={{marginLeft: '10px'}} onClick= { () => this.deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    </div>

            </div>
        );
    }
}

export default ProductListComponent;