import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';

class SupplierCreateComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            name:'',
            contactPerson:'',
            email:'',
            phone:'',
        }
    
       this.changeNameHandler = this.changeNameHandler.bind(this);
       this.changeContactPersonHandler = this.changeContactPersonHandler.bind(this);
       this.changePhoneHandler = this.changePhoneHandler.bind(this);
       //this.changeEmailHandler = this.changeEmailHandler.bind(this);
       this.saveSupplier = this.saveSupplier.bind(this);
    }
    saveSupplier = (e) =>{
        e.preventDefault();
        let supplier ={name: this.state.name, contactPerson: this.state.contactPerson,
        email: this.state.email, phone: this.state.phone};
        console.log('supplier => '+JSON.stringify(supplier));

        SupplierService.createSupplier(supplier).then(res => {
            this.props.history.push('/suppliers')
        });
    }

    changeNameHandler= (event) => {
    this.setState({name: event.target.value});
   }
   changeContactPersonHandler= (event) => {
    this.setState({contactPerson: event.target.value});
   }
   changeEmailHandler= (event) => {
    this.setState({email: event.target.value});
   }
   changePhoneHandler= (event) => {
    this.setState({phone: event.target.value});
   }
   cancel(){
    this.props.history.push('/suppliers');
   }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">ADD USER</h3>
                            <div className="card-body">
                                <form>
                                    <div className='form-group'>
                                        <label>Supplier Name: </label>
                                        <input placeholder='Supplier Name' name='name' className='form-control'
                                        value={this.state.name} onChange={this.changeNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> Contact Person: </label>
                                        <input placeholder='Contact Person' name='contactPerson' className='form-control'
                                        value={this.state.contactPerson} onChange={this.changeContactPersonHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> Email: </label>
                                        <input placeholder='Email' name='email' className='form-control'
                                        value={this.state.email} onChange={this.changeEmailHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> Phone: </label>
                                        <input placeholder='Phone' name='phone' className='form-control'
                                        value={this.state.phone} onChange={this.changePhoneHandler}/>

                                    </div>
                                    <button className='btn btn-success' onClick={this.saveSupplier}>Save</button>
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

export default SupplierCreateComponent;