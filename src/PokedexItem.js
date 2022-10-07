import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const PokedexItem=({url})=>{
const [pokemon,setPokemon]=useState([]);

const navegar=useNavigate();
useEffect(()=>{
axios.get(url).then(res=>setPokemon(res.data))
},[])

const navegas=(id)=>{
const n=
navegar(`/pokedex/${id}`);
return n;
}
//console.log(pokemon)
return(<div onClick={()=>navegas(pokemon.id)}>
  
    <img src={
    pokemon.sprites?.front_default}
    alt="pokemon" height="200" width="200"/>
    <h5>{pokemon.name}</h5>
    <p>{pokemon.types?.[0]?.type?.name}/{pokemon.types?.[1]?.type?.name} </p>
    <center>Tipo</center>
    <hr/>
    <p>{pokemon.stats?.[0].stat?.name}: {pokemon.stats?.[0].base_stat} {pokemon.stats?.[5].stat?.name}: {pokemon.stats?.[5].base_stat}</p>
    <p>{pokemon.stats?.[1].stat?.name}: {pokemon.stats?.[1].base_stat} {pokemon.stats?.[2].stat?.name}: {pokemon.stats?.[2].base_stat}</p>
    
    
    </div>)


}
export default PokedexItem