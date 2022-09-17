import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Entregable.css'
import EntregableItem from './EntreagableItem';
const Entregable=()=>{
const [datos,setDatos]=useState({});
const [buscar,setBuscar]=useState("");

useEffect(() => {
const index=Math.floor(Math.random()*20)+1;
  axios.get(`https://rickandmortyapi.com/api/location/${index}`).then(res=>setDatos(res.data));
}, [])
const search=()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${buscar}`).then(res=>setDatos(res.data));



}

return(<div className="search">
<h1>Rick and Morty Wiki</h1>

    <input type="text" className="input" onChange={(e)=>setBuscar(e.target.value)} value={buscar} style={{marginBottom:'30px'}}/>
<button onClick={search}>Buscar</button>
<br/>
<h4>Residents</h4>

    
      

   <div className="cont">
    
        {datos.residents?.map(p=>(
   <div className="row">            
<EntregableItem url={p} key={p} />
</div>
))}
      </div> 
        
      

</div>)

}
export default Entregable;