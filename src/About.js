import React,{useState,useEffect } from 'react';
import  { increment,decrement,incrementByAmount,cambiarValor,cambiarColor}  from './counter-slice'
import { useSelector,useDispatch } from "react-redux";
import './About.css';
const About=()=>{
const counter=useSelector((state)=>state.counter)
const color=useSelector((state)=>state.counter)
const dispatch=useDispatch()
const [userName,setUserName]=useState('');
const [count,setCount]=useState("");
//const [colores,setColores]=useState(counter.color);

console.log(color)


    return(<div>
<div className="apagar" style={{background:color? "yellow":"gray"}}>

</div>
<br/>
<button type="button" onClick={() => dispatch(cambiarColor())}>cambiarColor</button>
<br/>
<br/>
<input type="text" onChange={(e)=>setUserName(e.target.value)} value={userName}/>
<input type="text" onChange={(e)=>setCount(e.target.value)} value={count}/>
<h1>{counter.counter}</h1>
<h1>{counter.name}</h1>
<h1>{counter.user}</h1>
<h1>{counter.userName}</h1>

 <button
 aria-label="Increment value"
 onClick={() => dispatch(increment(count))}
>
 Increment
</button>
<button  
 aria-label="Decrement value"onClick={()=>dispatch(decrement())}>Decrement</button>
<button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
<button onClick={() => dispatch(cambiarValor(userName))}>cambiarValor</button>
</div>)


}
export default About;