import React, { Component } from 'react';

class HeaderComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    
        
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark header">
                        <div><a className='navbar-brand'>Inventory Management App</a></div>
                        <a className='nav-item nav-link text-muted' href='http://localhost:3000/users'>Users</a>
                        <a className='nav-item nav-link text-muted' href='http://localhost:3000/products'>Products</a>
                        <a className='nav-item nav-link text-muted' href='http://localhost:3000/suppliers'>Suppliers</a>
                       
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponents;