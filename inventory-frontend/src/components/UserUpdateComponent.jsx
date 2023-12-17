import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserUpdateComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            userName:'',
            email:'',
            password:'',
        }
    
       this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
       this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
       //this.changeEmailHandler = this.changeEmailHandler.bind(this);
       this.changePasswordHandler = this.changePasswordHandler.bind(this);
       this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then((res)=>{
            let user = res.data;
            this.setState({
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                password: user.password,
                email: user.email
            });
        });
    }

    updateUser = (e) =>{
            e.preventDefault();
            let user ={firstName: this.state.firstName, lastName: this.state.lastName,
            userName: this.state.userName, email: this.state.email, password: this.state.password};
            console.log('user => '+JSON.stringify(user));

            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            })

            
        }

       changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
       }
       changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
       }
       changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
       }
       changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
       }
       changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
       }

       cancel(){
        this.props.history.push('/users');
       }
    
     
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">UPDATE USER</h3>
                            <div className="card-body">
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name: </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> User Name: </label>
                                        <input placeholder='User Name' name='userName' className='form-control'
                                        value={this.state.userName} onChange={this.changeUserNameHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> Email: </label>
                                        <input placeholder='Email' name='email' className='form-control'
                                        value={this.state.email} onChange={this.changeEmailHandler}/>

                                    </div>
                                    <div className='form-group'>
                                        <label> Password: </label>
                                        <input placeholder='Password' name='password' className='form-control'
                                        value={this.state.password} onChange={this.changePasswordHandler}/>

                                    </div>
                                    <button className='btn btn-success' onClick={this.updateUser}>Save</button>
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

export default UserUpdateComponent;