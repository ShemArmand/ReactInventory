import React, { Component } from 'react';
import InventoryService from '../services/InventoryService';

class InventoryListComponet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inventories: []
        }
    
        this.addInventory = this.addInventory.bind(this);
        this.editInventory = this.editInventory.bind(this);
        this.deleteInventory = this.deleteInventory.bind(this);
    } 

    componentDidMount(){
        InventoryService.getInventory().then((res) =>{
            this.setState({ inventories: res.data});
        });
    }
    deleteInventory(id){
        InventoryService.deleteInventory(id).then( res =>{
            this.setState({inventories: this.state.inventories.filter(inventory => inventory.id !== id)});
        });
    }
    addInventory(){
        this.props.history.push('/add-inventory');
    }
    editInventory(id){
        this.props.history.push(`/update-inventory/${id}`);
    }
    
    render() {
        return (
            <div>
            <h2 className="text-center">Inventory List</h2>
            <div>
                <button className="btn btn-primary" onClick={this.addInventory}>Add an inventory</button>
            </div>
            <div className ="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Inventory ID </th>
                            <th> Product name </th>
                            <th> Quantity </th>
                            <th> Last name </th>
                            <th> password </th>
                            <th> User name</th>
                            <th> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            this.state.users.map(
                                user =>
                                <tr key ={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.password}</td>
                                    <td>{user.userName}</td>
                                    <td>
                                        <button onClick= { () => this.editUser(user.id)} className='btn btn-info'>Update</button>
                                        <button style={{marginLeft: '10px'}} onClick= { () => this.deleteUser(user.id)} className='btn btn-danger'>Delete</button>
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

export default InventoryListComponet;