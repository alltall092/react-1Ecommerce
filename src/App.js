import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Lista from './Lista';
import Country from './Country';
import './App.css';
import Entregable from './Entregable';
import Products from './Products';
import ProductList from './ProductList';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
<Router>
<nav>
  
          <ul className="menu">``
           
          <li>
              <Link to="/">UserList</Link>

            </li>
          <li>
              <Link to="lista">Lista</Link>

            </li>
          <li>
              <Link to="/products">Products</Link>
              
            </li>
            <li>
              <Link to="/country">Country</Link>
              
            </li>
            <li>
              <Link to="/entregable">Entregable</Link>
              
            </li>
            <li>
              <Link to="/ProductList">ProductsList</Link>
              
            </li>
          </ul>
        </nav>

      <Routes>
        <Route path="lista" element={<Lista/>} />
        <Route path="products" element={<Products/>} />
        <Route path="country" element={<Country/>} />
        <Route path="entregable" element={<Entregable/>} />
        <Route path="ProductList" element={<ProductList/>} />
        <Route path="/" element={<UserList/>} />
        </Routes>
      
       
        
        </Router>

    </div>
  );
}

export default App;
