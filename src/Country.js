import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './country.css';
import Ruta from './Ruta';
const Country=()=>{
const [country,setCountry]=useState([]);
const [text,setText]=useState("");
useEffect(()=>{
axios.get('https://restcountries.com/v3.1/all').then(res=>setCountry(res.data))
},[]

)
console.log(country)
return(<div className="container-country">
    <div className="item-country header">
 header
</div>
<div className="item-country main">
 <Ruta/>
</div>
<div className="item-country sidebar">
 sidebar
</div>
<div className="item-country footer">
 footer
</div>


</div>)

}
export default Country;