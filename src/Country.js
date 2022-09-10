import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Country=()=>{
const [country,setCountry]=useState([]);
const [text,setText]=useState("");
useEffect(()=>{
axios.get('https://restcountries.com/v3.1/all').then(res=>setCountry(res.data))
},[]

)
console.log(country)
return(<div>
    <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
    <h1>{text}</h1>
    {country.map((c,index)=>(
<ul key={index}>
<li>{c.name.official}</li>
</ul>


))}</div>)

}
export default Country;