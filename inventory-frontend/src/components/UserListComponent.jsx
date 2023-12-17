import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: []
        }
    
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    } 
    
    componentDidMount(){
        UserService.getUsers().then((res) =>{
            this.setState({ users: res.data});
        });
    }
    deleteUser(id){
        UserService.deleteUser(id).then( res =>{
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    addUser(){
        this.props.history.push('/add-user');
    }
    editUser(id){
        this.props.history.push(`/update-user/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addUser}>Add a user</button>
                </div>
                <div className ="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> User ID </th>
                                <th> User Email </th>
                                <th> First name </th>
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

export default UserListComponent;