import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserListComponent from './components/UserListComponent';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import UserCreateComponent from './components/UserCreateComponent';
import UserUpdateComponent from './components/UserUpdateComponent';
import ProductListComponent from './components/ProductListComponent';
import ProductCreateComponent from './components/ProductCreateComponent';
import ProductUpdateComponent from './components/ProductUpdateComponent';
import SupplierListComponent from './components/SupplierListComponent';
import SupplierCreateComponent from './components/SupplierCreateComponent';
import SupplierUpdateComponent from './components/SupplierUpdateComponent';


function App() {
  return (
    <div>
      <Router>
            <HeaderComponents />
              <div className="container">
                <Switch> http://localhost:3000/
                    <Route path="/" exact component={UserListComponent}></Route>
                    
                    <Route path="/users" component={UserListComponent}></Route>
                    <Route path="/products" component={ProductListComponent}></Route>
                    <Route path="/suppliers" component={SupplierListComponent}></Route>

                    <Route path="/add-user" component={UserCreateComponent}></Route>
                    <Route path="/add-product" component={ProductCreateComponent}></Route>
                    <Route path="/add-supplier" component={SupplierCreateComponent}></Route>

                    <Route path="/update-user/:id" component={UserUpdateComponent}></Route>
                    <Route path="/update-product/:id" component={ProductUpdateComponent}></Route>
                    <Route path="/update-supplier/:id" component={SupplierUpdateComponent}></Route>
                </Switch>              </div>
            <FooterComponents />
      </Router>
    </div>
  );
}

export default App;
