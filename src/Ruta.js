import {createContext,useContext} from 'react';

 const context=createContext({
users:[{id:1,
name:"julio",
user:"piyoyo279"},
{id:2,
    name:"juan",
    user:"piyoyo279"
}]
})

 
const Ruta=()=>{
const con=useContext(context);
console.log(con.users)
    return(<div>
        hola mundo
        
        
        </div>)




}

export default Ruta;