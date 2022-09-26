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
import About from './About';
import Home from './Home';
import Character from './Character';
import UserInput from "./UserInput";
import PokedexCard from "./PokedexCard";
import PokedexDetalles from "./PokedexDetalles";
import ProtectedRoutes from './ProtectedRoutes';
function App() {
  return (
    <div className="App">
<Router>
<nav>
  
          <ul className="menu">``
           
          <li>
              <Link to="userList">UserList</Link>

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
            <li>
              <Link to="/about">About</Link>
              
            </li>
            <li>
              <Link to="/character">Character</Link>
              
            </li>
            <li>
              <Link to="/">UserInput</Link>
              
            </li>
            
          </ul>
        </nav>

      <Routes>
        <Route path="lista" element={<Lista/>} />
        <Route path="products" element={<Products/>} />
        <Route path="country" element={<Country/>} />
        <Route path="entregable" element={<Entregable/>} />
        <Route path="ProductList" element={<ProductList/>} />
        <Route path="userList" element={<UserList/>} />
        <Route path="about" element={<About/>} />
        <Route path="home" element={<Home/>} />
        <Route path="character" element={<Character/>} />
        <Route path="character/:id" element={<Character/>} />

        <Route path="/" element={<UserInput/>} />
        <Route element={<ProtectedRoutes/>}/>
            <Route path="pokedex"  element={<PokedexCard/>} />
          <Route path="pokedex/:id"  element={<PokedexDetalles/>} />
        </Routes>
      
       
        
        </Router>

    </div>
  );
}

export default App;
