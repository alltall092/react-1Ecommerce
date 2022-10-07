import React, {useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import './productDetail.css';
import {getProducts,postCart,getCart }from './Shopingcart.slice';
import { Carousel } from 'react-carousel-minimal';
import {increment,setItem,decrement }from './Shopingcart.slice';
import { Button, Col, ListGroup, Row } from "react-bootstrap";
const ProductDetail=()=>{

   const prod=useSelector((state)=>state.cart);
    const {id}=useParams();
    const dispatch=useDispatch();
  
    const item=useSelector((state)=>state.cart.item);
    useEffect(()=>{
   dispatch(getProducts())
   
    },[])
    const findProduct=prod.product?.find(p=>p.id===Number(id));
const index=prod.product?.findIndex(x=>x.id>0);
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
 

  
  





return(<div className="grid-container">

<div className="grid-item">
<div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="400px"
            height="200px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="50px"
            style={{
              textAlign: "left",
              maxWidth: "400px",
              maxHeight: "200px",
              margin: "40px auto",
              backgroundSize:"100%"
            }}
          />
        </div>
      </div>

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
className="Success" onClick={()=>dispatch(increment())}>+</Button>
<input type="text" value={item[0]?.cantidad} style={{width:"30px"}}/>
<Button type="button" 
className="Success" onClick={()=>dispatch(decrement())}>-</Button>

          
        
</div>
<Button type="button" 
className="Success" style={{width:"400px"}} onClick={()=>dispatch(setItem(findProduct))}> Add To Cart</Button> 


</div>

</div>)

}
export default ProductDetail;