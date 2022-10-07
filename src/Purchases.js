import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { getPurchases }from './Shopingcart.slice';
import React,{useEffect} from 'react'
import  {useSelector,useDispatch} from 'react-redux';
import './purchases.css';


const Purchases=()=>{
  const navigate=useNavigate();
  const dispatch=useDispatch();
const purchase=useSelector((state)=>state.cart.purchases[0])
useEffect(()=>{
dispatch(getPurchases())


},[])
console.log(purchase)
return (<div>
 <div>
      <h1>Purcharses</h1>
      <ListGroup>
        {purchase?.cart.products.map((favorite) => (
          <ListGroup.Item
            key={favorite.id}
            onClick={() => navigate(`/product/${favorite.id}`)}
          >
            <Row>
              <Col md={3} lg={2}>
                <h4>{favorite.title}</h4>
              </Col>
              <Col md={5}>
                <input type="text" value={favorite.productsInCart.quantity} style={{width:"50px"}}/>
              </Col>
              <Col md={4}>
              <h3>{favorite.price}</h3>
              </Col>
            </Row>

            <br />
            
        
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>


</div>)

}
export default Purchases