import React, {useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import './productDetail.css';
import {getProducts,postCart,PostsCart,getCart}from './Shopingcart.slice';
import {setItem }from './Shopingcart.slice';
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


const ProductDetail=({updateQty})=>{

   const prod=useSelector((state)=>state.cart);
   const [index, setIndex] = useState(0);
    const {id}=useParams();
    const dispatch=useDispatch();
    //const  [cantidad, setCantidad]=useState(1);
    const item=useSelector((state)=>state.cart.item);
 const initialItems={item}
 const initialState = JSON.parse(localStorage.getItem("items"));
    const [items, setItems] = useState(initialState|| initialItems);
   const [cantidad,setCantidad]= useState(1);


    useEffect(()=>{
   dispatch(getProducts())
   
    },[])
    const findProduct=prod.product?.find(p=>p.id===Number(id));

    const data = [
      {
        image:findProduct?.productImgs[0],
        caption: `<div>
                    San Francisco
                    <br/>
                    Next line
                  </div>`
      },
      {
        image: findProduct?.productImgs[1],
        caption: "Scotland"
      },
      {
        image: findProduct?.productImgs[2],
        caption: "Darjeeling"
      },
      {
        image:findProduct?.productImgs[0],
        caption: "San Francisco"
      },
      {
        image: findProduct?.productImgs[1],
        caption: "Scotland"
      },
      {
        image: findProduct?.productImgs[2],
        caption: "Darjeeling"
      },
      {
        image: findProduct?.productImgs[0],
        caption: "San Francisco"
      },
      {
        image: findProduct?.productImgs[1],
        caption: "Scotland"
      },
      {
        image: findProduct?.productImgs[2],
        caption: "Darjeeling"
      }
    ];
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
 useEffect(()=>{

dispatch(getCart())

 },[])


 
const counter=(id)=>{

  updateQty(id,cantidad)
  setCantidad(cantidad+1)

}

const decounter=(id)=>{
  updateQty(id,cantidad)
  setCantidad(cantidad-1)
  
  }
  console.log(prod)
 

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


return(<div className="grid-container">

<div className="grid-item">
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={findProduct?.productImgs[0]}
          alt="First slide" style={{height:"300px"}}
        />
        <Carousel.Caption>
        <h3>{findProduct?.title}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={findProduct?.productImgs[1]}
          alt="Second slide" style={{height:"300px"}}
        />

        <Carousel.Caption>
          <h3>{findProduct?.title}</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={findProduct?.productImgs[2]}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{findProduct?.title}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      

</div>
<div className="grid-item">
<h1>{findProduct?.title}</h1>
<p style={{margin:"5px",padding:"5px",fontSize:"15px"}}>{findProduct?.description}</p>
<div className="button">
<p style={{fontSize:"10px"}}>Price:</p>
  <br/>

</div>
<div className="button">
<h4 style={{marginLeft:"100px"}}>{findProduct?.price}</h4>
<Button type="button" 
className="Success" onClick={()=>counter(findProduct.id)}>+</Button>
<input type="text" value={cantidad} style={{width:"30px"}}/>
<Button type="button" 
className="Success" onClick={()=>decounter(findProduct.id)}>-</Button>

          
        
</div>
<Button type="button" 
className="Success" style={{width:"400px"}} onClick={()=>dispatch(setItem(findProduct))}> Add To Cart</Button> 


</div>

</div>)

}
export default ProductDetail;