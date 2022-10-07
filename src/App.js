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
import {useSelector,useDispatch} from 'react-redux';
import Product  from './Product';
import ProductDetail from './ProductDetail';
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {increment,deleteItem,decrement }from './Shopingcart.slice';
import Purchases from './Purchases'
import  ProtectedRouter from './ProtectedRouter';
//import {useNavigate} from 'react-router-dom';
import Logout from './Logout';
function App({ name, ...props }) {
  const loading=useSelector((state)=>state.cart);
  const item=useSelector((state)=>state.cart.item);
  const dispatch=useDispatch();
 const [show, setShow] = useState(false);
 //const navigate=useNavigate();

 const handleClose = () => setShow(false);
 const handleShow = () =>setShow(true);

const getTotal=()=>{
const finds=item.find(x=>x.id!==null)
const total=finds?.price*finds?.cantidad;
return total;
}




  return (
    <div className="App">
<Router>
<Navbar bg="dark" expand="lg">
  <Container> 
  <Navbar.Brand href="#home">Shoppingcart</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">

    
      <Nav.Link className="text-light"  as={Link} to="/product">Products</Nav.Link>
    
      <Nav.Link  className="text-light" as={Link} to="/purchases">Purcharses</Nav.Link>
  
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>
      <Logout/>
  
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
{loading.isloading &&<Loading/>}

      <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        {item?.map((items)=>(
            <div className="container-cart" key={item.id}>
            <div className="item-cart">
           
            <img src={items.productImgs[0]} alt="imagenes"  id="imagenes" height="30" width="50"/>
            <h6>{items.title}</h6>
          </div>
           <div className="item-cart">
           <Button variant="primary" onClick={()=>dispatch(increment())}>
            +
          </Button>
          <h4>{items.cantidad}</h4>
          <Button variant="primary" onClick={()=>dispatch(decrement())}>
            -
          </Button>
            </div>
            <div className="item-cart">
         <h4>{items.price}</h4>
         <hr/>
        
              </div>
            <div className="item-cart">
            <Button variant="primary"  onClick={()=>dispatch(deleteItem(items.id))}>
            x
          </Button>
              </div>
           
            </div>
          )
            )}
<h2>Total:{getTotal()}</h2>
<br/>
<Button>CheckOut</Button>
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
        <Route path="product/:id" element={<ProductDetail/>} />
        <Route path="/" element={<Login/>} />

 
            <Route path="pokedex"  element={<PokedexCard/>} />
          <Route path="pokedex/:id"  element={<PokedexDetalles/>} />
          
        </Routes>
      
       
        
        </Router>

    </div>
  );
}

export default App;
