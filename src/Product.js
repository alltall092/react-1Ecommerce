import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch}  from 'react-redux';
import {getProducts,setItem,postCart}from './Shopingcart.slice';
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Product.css';
const Product=()=>{
const [search,setSearch]=useState("")
const [prodFilter,setProdFilter]=useState([]);
const [categories, setCategories] = useState([]);
const dispatch=useDispatch();
const prod=useSelector((state)=>state.cart.product);

const navigate=useNavigate();
const [price1, setPrice1]=useState(null);
const [price2, setPrice2]=useState(null);

useEffect(() => {
dispatch(getProducts());
}, [])
useEffect(() => {
setProdFilter(prod)


},[prod])

useEffect(() => {
  axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
    .then((res) => setCategories(res.data.data.categories
      ));

}, []);
const Search=()=>{
const filters=prod.filter(product=>
  product.title.toLowerCase().includes(search.toLowerCase()))
setProdFilter(filters);

}
const filterCategory = (categoryId) => {
  const filtered = prod.filter((p) => p.category.id === categoryId);
  setProdFilter(filtered);
};
const filterPrice=()=>{
const filter_price=prod.filter(p=>p.price>=parseInt(price1) &&  p.price<=parseInt(price2))
setProdFilter(filter_price);

}
const navegar=(id)=>{
    const productId=navigate(`/product/${id}`);
    return productId;

}
const addItem=()=>{
const product={
  id:10,
quantity:10}
  dispatch(postCart(product))
  
  }
console.log(categories)
return(<div>
 <div className="col col-md-6" style={{position:"relative",left:"0" ,right:"0",margin:"auto"}}>
  <InputGroup className="mb-3">
        <Form.Control
        
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch(e.target.value)} value={search}
        />
        <InputGroup.Text id="basic-addon2" onClick={Search}>search</InputGroup.Text>
      </InputGroup>
</div>

      <div className="product-container">
<div className="menu-item">
<Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header><h5>Price</h5>
        
        </Accordion.Header>
       
        <Accordion.Body>
        
        <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2" className="label">
          From
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" className="control" onChange={(e)=>setPrice1(e.target.value)} value={price1}/>
          </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 formu">
        <Form.Label column sm="2" className="label">
          To
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" className="control"onChange={(e)=>setPrice2(e.target.value)} value={price2} />
          </Col>
      </Form.Group>
      <Form.Group className="mb-3 boton">
      <Button variant="primary" onClick={filterPrice}>Filter Price</Button>
      </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h5>Category</h5>
      
        </Accordion.Header>
       
        <Accordion.Body>
        <ul className="menu-category">
        {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => filterCategory(category.id)}
              style={{ cursor: "pointer" }}
            >
              {category.name}
            </li>
          ))}
    
     
       
      </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
{prodFilter?.map((p)=>(
<div className="product-item" key={p.id}>
<Card style={{ width: '18rem' }}>
<Card.Link onClick={()=>navegar(p.id)}>

      <Card.Img variant="top" src={p.productImgs[0]} alt="imagenes"  id="imagenes" />
      </Card.Link>
      <Card.Body>
        <Card.Title>{p.title}</Card.Title>
       
      </Card.Body>
      <Card.Body>
  <ListGroup><h4>{'USD$'+p.price}</h4> </ListGroup>
      <ListGroup className="list-group-flush">
      
      <div className="cart-item">
     
      
      
     
      
      <Card.Link href="#"><Button variant="success" style={{borderRadius:"100%",width:"50px"}}  onClick={()=>dispatch(setItem(p))}><i className="fa fa-cart-plus" style={{color:"white",fontSize:"30px",margin:"0 auto",left:"0",right:"0",top:"0",bottom:"0"}}></i></Button></Card.Link>
      </div>
        </ListGroup>
      </Card.Body>
    </Card>




</div>))}
    
</div>
    </div>)

}
export default Product;