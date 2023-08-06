import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import getConfig from "./getConfig";
export  const ShopingcartSlice=
createSlice({
name:"shoppingcart",
initialState:{
item:[],
isloading:false,
product:[],
purchases:[],
cantidad:0,
total:0,
cart:[]
},
   
reducers:{

setProduct:(state,action)=>{
state.product=action.payload;


},
setPurchase:(state,action)=>{
  state.purchases=action.payload;
  
  
  },
  

setIsloading:(state,action)=>{

state.isloading=action.payload;



},
setCart:(state,action)=>{
state.cart=action.payload

},
setItems:(state,action)=>{
  state.item=action.payload
  
  },
  
setItem:(state,action)=>{
const index=state.item.findIndex(x=>x.id===action.payload.id)
if(index>=0){
state.item[index].cantidad+=1

}else{
state.cantidad=1
const addcart={...action.payload,cantidad:state.cantidad}
state.item.push(addcart);
localStorage.setItem("items",JSON.stringify(state.item))

}


},
increment:(state,action)=>{
 //const index=state.item.findIndex(x=>x.id>=0)
 //for(let i=0;i<state.item.length;i++){
//state.item[i].cantidad+=state.item[i].cantidad
 //}
 state.item.forEach(element =>{
if(state.product.id===action.payload){
element.cantidad=element.cantidad+1

}
 })

},
 decrement:(state,action)=>{
  const index=state.item.findIndex(x=>x.id===action.payload.id)
  if(index>=0){
  state.item[index].cantidad+=1
  
  }else{
    const addcart={...action.payload,cantidad:1}


  }
},
deleteItem:(state,action)=>{
 const fil=state.item.filter(x=>x.id !==action.payload.id);
//const local=localStorage.removeItem("items", JSON.stringify(fil));
return fil;

},
setCantidad:(state,action)=>{
state.cantidad=action.payload
localStorage.setItem("items",JSON.stringify(state.item))



}


}
});




export  const getProducts=()=>dispatch=>{
    dispatch(setIsloading(true));
    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
    .then(res=>dispatch(setProduct(res.data.data.products))).finally(()=>dispatch(setIsloading(false)))

}
export const getPurchases = () => dispatch => {
  dispatch(setIsloading(true));
   axios
    .get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
    .then((res) => dispatch(
      setPurchase(res.data.data.purchases)))
    .finally(() => dispatch(setIsloading(false)));
};

export const getCart = () =>(dispatch) => {
  dispatch(setIsloading(true));
   axios
    .post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
    .then((res) => dispatch(setCart(res.data)))
    .finally(() => dispatch(setIsloading(false)));
};

export const postCart = (product) => (dispatch)=> {
  dispatch(setIsloading(true));
   axios
    .post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",product,getConfig())
    .then(() => dispatch(getCart())).catch(error=>console.log(error.response))
    .finally(() => dispatch(setIsloading(false)));
};
export const PostsCart = () => (dispatch)=> {
  dispatch(setIsloading(true));
   axios
    .post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",{},getConfig())
    .then(() => dispatch(getCart([]))).catch(error=>console.log(error.response))
    .finally(() => dispatch(setIsloading(false)));
};





export const {setProduct,setItem,setIsloading,increment,decrement, setCantidad,deleteItem,setItems,setPurchase,setCart}=ShopingcartSlice.actions;
export default ShopingcartSlice.reducer