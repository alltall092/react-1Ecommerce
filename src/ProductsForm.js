import React,{useState,useEffect} from 'react';
import './productList.css';

const ProductsForm=({addProduct,
productSelected,updateProduct})=>{

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [isCompleted,setIsCompleted]=useState(false);
useEffect(() => {
if(productSelected){
setTitle(productSelected.title);
setDescription(productSelected.description);
setIsCompleted(productSelected.isCompleted)


}
}, [productSelected])

const submit=(e)=>{
e.preventDefault();
const NewProduct={
    id:Date.now(),
    title:title,
    description:description,
    isCompleted:isCompleted
    }
if(productSelected){
updateProduct(NewProduct)

}else{
addProduct(NewProduct)
}
}

return(<div className="form">
<form onSubmit={submit} className="myForm">

<label htmlFor="title">Title</label>
<input type="text" onChange={(e)=>setTitle(e.target.value)}  id="title" value={title}/>
<br/>
<label htmlFor="description">Description</label>
<textarea id="description" col="10" riw="10"  onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
<br/>
<label htmlFor="isCompleted">Checkbok</label>
<input type="checkbox" onChange={(e)=>setIsCompleted(e.target.value)} value={isCompleted} id="isCompleted"/>
<br/>
<input type="submit"  value="enviar"/>



</form>
</div>)

}
export default ProductsForm