import React,{useState,useEffect} from 'react';
import PokedexItem from './PokedexItem'
import Pagination from 'react-bootstrap/Pagination';

import axios from "axios";
import './pokemonList.css'
const PokedexCard=()=>{
const [name,setName]=useState("");
const [pokemonList,setPokemonList]=useState([]);
const [type,setType]=useState([])
useEffect(() => {
    

axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(res=>setPokemonList(res.data.results))
}, [])

useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/`).then(res=>setType(res.data.results));
}, [])
console.log(pokemonList)

const searchs=()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=>setPokemonList(res.data.results ))


}
const searchType=(typeUrl)=>{
axios.get(typeUrl).then(res=>setPokemonList(res.data.pokemon.map(pokemon=>pokemon.pokemon)))


}

console.log(type)

return(
<div>
<input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
<button onClick={searchs}>Buscar</button>
<br/>
<h6>filter on data</h6>

<select onChange={(e)=>searchType(e.targat.value)}>
<option value="">selected data</option>
{type.map(types=>(
      <option value={types.url} 
      key={types.id}>{types.name}</option>
))}
  
    </select>
<br/>
<br/>

<div className="container-pokemon">

{pokemonList.map((p,index)=>(

<div className="pokemon-item" key={p.url}>
<PokedexItem url={p.url} />
    </div>))}
 
   
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

</div>
</div>)

}
export default PokedexCard;