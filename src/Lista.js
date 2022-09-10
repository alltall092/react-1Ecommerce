import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Lista.css';
const Lista=()=>{
const [lista,setLista]=useState([])
useEffect(()=>{
axios.get('https://jsonblob.com/api/920762444738215936').then(res=>setLista(res.data))
},[])
console.log(lista);
const listar=lista.map((user,index)=>(
<div className="item" key={index}>
<h2>{user.name.first} {user.name.last}</h2>
    <img src={user.picture.large}  height="200" width="200" alt="imagenes"/> 
    <h4>{user.email}</h4>
    <h4>{user.cell}</h4>
</div>
))
return (
<div className="container">

{listar}

    </div>)




}
export default Lista;