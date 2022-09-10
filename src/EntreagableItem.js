import { useState,useEffect } from 'react';
import axios from 'axios';
const EntregableItem=({url})=>{

const [datos,setDatos]=useState({});
    useEffect(() => {
        
    axios.get(url).then(res=>setDatos(res.data));
        }, [url])
console.log(datos)
return(
<div className="cont">

    <div className="row">
<img src={datos.image} height="200" width="200" alt="imagenes"/>
</div>
<div className="row">
        <h5 key={datos.id}>{datos.name}</h5>
        <p>{datos.type}</p>
<p>{datos.status}</p>
<p>{datos.origin?.name}</p>
<p>{datos.episode?.length}</p>
</div>

    
</div>)

}
export default EntregableItem;