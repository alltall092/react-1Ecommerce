import React,{useState } from 'react'
import { entrar } from './username-slice'
import { useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';

const UserInput=()=>{ 
const [user,setUser]=useState("");
const dispatch=useDispatch();
const navegar=useNavigate();
const enviar=()=>{
dispatch(entrar(user));

navegar("/pokedex")
}

return(<div>
    <input type="text" onChange={(e)=>setUser(e.target.value)} value={user}/>
    <button  onClick={enviar}>Enviar</button>
    </div>)

}
export default UserInput;