import React,{ useState,useEffect } from 'react';
import ProductsForm from './ProductsForm';
import axios from 'axios';
import './productList.css';

const ProductList=()=>{
const [productSelected,setProductSelected]=useState(null);
const [product,setProduct]=useState([]);
useEffect(() => {
getProducts();
},[])

const getProducts=()=>{

    axios.get('https://todo-app-academlo.herokuapp.com/todos/?format=json').then(res=>
    setProduct(res.data));

}
/*const InitialState=[{
    id:1,
    title:'samsung',
    description:'celular',
    isCompleted:true


},
{
    id:2,
    title:'alcatel',
    description:'note 10',
    isCompleted:true


},
{
    id:3,
    title:'hawai',
    description:'celular',
    isCompleted:true


}
];*/
console.log(product)
const addProduct=(newProduct)=>{
    axios.post('https://todo-app-academlo.herokuapp.com/todos/?format=json',newProduct).then(()=>getProducts());
//setProduct([...product,newProduct])


}
const eliminar=(id)=>{
axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`).then(()=>getProducts());
//const products=product.filter(p=>p.id!==id);
//setProduct(products)


}
const selectProduct=(product)=>{

setProductSelected(product)

}

const updateProduct=(newProduct)=>{
newProduct.id=productSelected.id;
//const index=product.findIndex(x=>x.id===newProduct.id);
//product[index]=newProduct;
axios.put(`https://todo-app-academlo.herokuapp.com/todos/${newProduct.id}/`,newProduct)
.then(()=>getProducts()).catch(error=>console.log(error.response));


//setProduct([...product])



}

return (<>
<ProductsForm 
addProduct={addProduct}
productSelected={productSelected}
updateProduct={updateProduct}/>
<br/>
{product.map(p=>(
<div className="obj" key={p.id}>
<h2>{p.title}</h2>

<p>{p.description}</p>
<p>{p.isCompleted}</p>
<button type="button" onClick={()=>eliminar(p.id)}>eliminar</button>
<button type="button" onClick={()=>selectProduct(p)}>update</button>
</div>
))}
    
    </>)


}
export default ProductList;