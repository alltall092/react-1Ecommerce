import React,{useState,useEffect} from "react";
import axios from "axios";

import { useNavigate,useParams } from 'react-router-dom';


const Character=()=>{

const [character,setCharacter]=useState({});
const navigate=useNavigate();
const id=useParams();
useEffect(() => {
axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res=>setCharacter(res.data))
}, [id])
console.log(character.name)
const regresar=()=>{
const n=navigate(-1);
return n;



}
    return(<div>
<h1 key={character.id}>{character.name}</h1>

<button type="button" onClick={regresar}>Volver</button>
    </div>)


}
export default Character;