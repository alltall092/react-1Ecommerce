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


function App() {
  return (
    <div className="App">
<Router>
<nav>
  
          <ul className="menu">``
          
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
              <Link to="/">Entregable</Link>
              
            </li>
           
          </ul>
        </nav>

      <Routes>
        <Route path="lista" element={<Lista/>} />
        <Route path="products" element={<Products/>} />
        <Route path="country" element={<Country/>} />
        <Route path="/" element={<Entregable/>} />
        </Routes>
      
       
        
        </Router>

    </div>
  );
}

export default App;
