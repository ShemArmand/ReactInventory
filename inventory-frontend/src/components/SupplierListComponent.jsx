import React, { Component } from 'react';
import SupplierService from '../services/SupplierService';

class SupplierListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            suppliers: []
        }
    
        this.addSupplier = this.addSupplier.bind(this);
        this.editSupplier = this.editSupplier.bind(this);
        this.deleteSupplier = this.deleteSupplier.bind(this);
    } 
    componentDidMount(){
        SupplierService.getSuppliers().then((res) =>{
            this.setState({ suppliers: res.data});
        });
    }
    deleteSupplier(id){
        SupplierService.deleteSupplier(id).then( res =>{
            this.setState({suppliers: this.state.suppliers.filter(supplier => supplier.id !== id)});
        });
    }
    addSupplier(){
        this.props.history.push('/add-supplier');
    }
    editSupplier(id){
        this.props.history.push(`/update-supplier/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Suppliers List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addSupplier}>Add a supplier</button>
                </div>
                <div className ="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Supplier ID </th>
                                <th> Supplier name </th>
                                <th> Contact person </th>
                                <th> Phone </th>
                                <th> Email </th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                this.state.suppliers.map(
                                    supplier =>
                                    <tr key ={supplier.id}>
                                        <td>{supplier.id}</td>
                                        <td>{supplier.name}</td>
                                        <td>{supplier.contactPerson}</td>
                                        <td>{supplier.phone}</td>
                                        <td>{supplier.email}</td>
                                        <td>
                                            <button onClick= { () => this.editSupplier(supplier.id)} className='btn btn-info'>Update</button>
                                            <button style={{marginLeft: '10px'}} onClick= { () => this.deleteSupplier(supplier.id)} className='btn btn-danger'>Delete</button>
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

export default SupplierListComponent;