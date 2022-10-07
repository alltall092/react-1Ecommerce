import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Cart=()=>{
const [product,setProduct]=useState([])
useEffect(() => {
 axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products').then(res=>setProduct(res.data))
}, [])
console.log(product)

return(<div>hola mundo</div>)

}
export default Cart;