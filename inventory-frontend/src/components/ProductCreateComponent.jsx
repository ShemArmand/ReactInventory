import React, { Component } from 'react';
import ProductService from '../services/ProductService';


class ProductCreateComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            productName:'',
            description:'',
            price:''
        }
    
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }
 
    saveProduct = (e) =>{
        e.preventDefault();
        let product ={productName: this.state.productName, description: this.state.description,
            price: this.state.price};
        console.log('product => '+JSON.stringify(product));

        ProductService.createProduct(product).then(res => {
            this.props.history.push('/products')
        });
    }

    changeProductNameHandler= (event) => {
    this.setState({productName: event.target.value});
   }
   changeDescriptionHandler= (event) => {
    this.setState({description: event.target.value});
   }
   changePriceHandler= (event) => {
    this.setState({price: event.target.value});
   }

   cancel(){
    this.props.history.push('/products');
   }
    
    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">ADD PRODUCT</h3>
                        <div className="card-body">
                            <form>
                                <div className='form-group'>
                                    <label>Product Name: </label>
                                    <input placeholder='Product Name' name='productName' className='form-control'
                                    value={this.state.productName} onChange={this.changeProductNameHandler}/>

                                </div>
                                <div className='form-group'>
                                    <label> Description: </label>
                                    <input placeholder='Description' name='description' className='form-control'
                                    value={this.state.description} onChange={this.changeDescriptionHandler}/>

                                </div>
                                <div className='form-group'>
                                    <label> Unit Price: </label>
                                    <input placeholder='Price' name='price' className='form-control'
                                    value={this.state.price} onChange={this.changePriceHandler}/>

                                </div>
                                <button className='btn btn-success' onClick={this.saveProduct}>Save</button>
                                <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ProductCreateComponent;