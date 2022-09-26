import React,{useState,useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import DetalleItem from './DetalleItem';
const PokedexDetalles=()=>{
const id=useParams();
const [poke,setPoke]=useState([])
useEffect(()=>{
axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(res=>setPoke(res.data.results))
},[])


    return(<div>
    {poke.map(p=>(
    <div key={p.url}>
    <DetalleItem 
    url={p.url} id={id}/>
    </div>))}
    
        </div>)


}
export default PokedexDetalles;