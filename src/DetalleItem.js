import React,{useState,useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
const DetalleItem=({url,id})=>{
const [pokemon,setPokemon]=useState([])
useEffect(()=>{
axios.get(`${url}${id}`).then(res=>setPokemon(res.data))
},[])
console.log(pokemon)

return(
<div>
<img src={
    pokemon.sprites?.front_default}
    alt="pokemon" height="200" width="200"/>

</div>)

}
export default DetalleItem;