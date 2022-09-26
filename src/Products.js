import React,{useReducer} from 'react';
import { createStore } from 'redux';
import { Button } from 'primereact/button';
 
import './App';


const initialState={count:0}
const reducer=(state,action)=>{
switch(action.type){
case 'increment':
return {count:state.count+1}
case 'decrement':
return {count:state.count-1}
default:
throw new Error();

}


}




   
const Products=()=>{
    
const [state,dispatch]=useReducer(reducer,initialState)
return(<div>

   <p className="animacion">hola me llamo julio perez</p> 
   <Button label="Primary" />
<Button label="Secondary" className="p-button-secondary" />
<Button label="Success" className="p-button-success" />
<Button label="Info" className="p-button-info" />
<Button label="Warning" className="p-button-warning" />
<Button label="Danger" className="p-button-danger" />
<h1>{state.count}</h1>
<button onClick={()=>dispatch({type:'increment'})}>Increment</button>
<button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
<div className="card">
    <div className="flex flex-wrap md:justify-content-between justify-content-center card-container">
        <div className="text-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-500</div>
        <div className="text-cyan-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-cyan-500</div>
        <div className="text-orange-500 w-12rem h-6rem surface-overlay border-round border-1 border-gray-500 font-bold m-2 flex align-items-center justify-content-center">text-orange-500</div>
    </div>
</div>
<div className="card">
    <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div className="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
         font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">fadeinleft</div>
    </div>
</div>
</div>)




}
export default Products;