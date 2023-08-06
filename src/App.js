import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Loading from './Loading';

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
//import ProtectedRoutes from './ProtectedRoutes';
import Movie from './Movie';
import Car from './Car';
import Formcar from './Formcar';
import Inicio from './Inicio';
import Cart from './Cart';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from 'react-redux';
import Product  from './Product';
import ProductDetail from './ProductDetail';
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
//import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CheckoutForm from './CheckoutForm';
import Purchases from './Purchases'
import  ProtectedRouter from './ProtectedRouter';
//import {useNavigate} from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Logout from './Logout';
const stripePromise = loadStripe('pk_test_51IOB3XGuY2qOE3VYhvbFoZG7KU6BRcKFmU1F1728z4R7IxyjEkvWUc8p12n7DwRYAVotknCcA1n60jegA5k1goM900yVlfV8YM');
function App({ name, ...props }) {
  const loading=useSelector((state)=>state.cart);
  const item=useSelector((state)=>state.cart.item);
  //const dispatch=useDispatch();
 const [show, setShow] = useState(false);
 //const  [cantidad, setCantidad]=useState(1);
 const initialItems={item}
 const initialState = JSON.parse(localStorage.getItem("items"));
 const [items, setItems] = useState(initialState|| initialItems);
const auth=sessionStorage.getItem("auth");

const [isLoggedin, setIsLoggedin] = useState(false);
 //const navigate=useNavigate();
 useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));
}, [items]);




 const handleClose = () => setShow(false);
 const handleShow = () =>setShow(true);
 const updateQty = (id, newQty) => {
  const newItems = items.map((item) => {
    if (item.id === id) {
      return { ...item,cantidad: newQty };
    }
    return item;
  });
  setItems(newItems);
};
const remover=(id)=>{
  
  let items =JSON.parse(localStorage.getItem("items"));
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("items", JSON.stringify(items));
  if (items.length === 0) {
    localStorage.removeItem("items");
  }

  setItems(items)
  


}

 const total=Array.isArray(items)?
 items.reduce((total, item) => total + item.cantidad * item.price, 0)
.toFixed(2):null;

//const options = {
  // passing the client secret obtained from the server
  //clientSecret: 'sk_test_51IOB3XGuY2qOE3VYB3Cloc6sGDOpRvWZ2RdNIiw6OLqxaHB40wJ6iuzAtgE50Kfxl3Ac1uihPYjzeTcvtNNbXEcY00FL06W9kq',
//};




  return (
    <div className="App">
<Router>
<Navbar bg="dark" expand="lg">
  <Container> 
  <Navbar.Brand href="#home">Shoppingcart</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">

    
      <Nav.Link className="text-light"  as={Link} to="/product"><i class="fa fa-product-hunt"></i>Products</Nav.Link>
    
      <Nav.Link  className="text-light" as={Link} to="/purchases">Purcharses</Nav.Link>
  
      <Button variant="primary" onClick={handleShow}>
      <i className="fa fa-cart-plus"></i>
      </Button>
    {auth!==null?(
<div className="auth-container">

<p style={{margin:"3px"}}><i class="fa fa-user"></i>{auth}</p>

         <Logout setIsLoggedin={setIsLoggedin}/>
      
</div>
):(<div className="auth-container">
   

         <Nav.Link  className="text-light" as={Link} to="/">Login</Nav.Link>
  <Nav.Link  className="text-light" as={Link} to="/login">Registrar</Nav.Link>

      </div>
      )}

   
  
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
{loading.isloading &&<Loading/>}

      <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shoppingcart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div>
        {Array.isArray(items)?
        items.map((item) => {
      
        return <CartItem key={item.id} {...item} updateQty={updateQty} remover={remover} />
    
        }):null}
      <h2>Total: { total}</h2>
</div>
        
 
      
   
        </Offcanvas.Body>
      </Offcanvas>


         

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
        <Route path="movie" element={<Movie/>} />
        <Route path="car" element={<Car/>} />
        <Route path="form" element={<Formcar/>} /> 
        <Route path="home" element={<Inicio/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="userinput" element={<UserInput/>} />
        <Route element={<ProtectedRouter/>}>
        <Route path="purchases" element={<Purchases/>} />
        </Route>
        <Route path="product" element={<Product/>} />
        <Route path="product/:id" element={<ProductDetail updateQty={updateQty}/>} />
        <Route path="/" element={<Login setIsLoggedin={setIsLoggedin}/>} />

 
            <Route path="pokedex"  element={<PokedexCard/>} />
          <Route path="pokedex/:id"  element={<PokedexDetalles/>} />
          
        </Routes>
      
       
        
        </Router>

    </div>
  );
}

export default App;
