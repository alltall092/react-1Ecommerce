import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './UserList.css';

import FormItem from './FormItem';
const UserList=()=>{
const [user,setUser]=useState([])
const[selectedUser,setSelectedUser]= useState(null)
useEffect(() => {

    getUsers();
}, [])
const getUsers=()=>{

axios.get("https://users-crud1.herokuapp.com/users/").then(res=>setUser(res.data))

}
const postUsers=(newUser)=>{

    axios.post("https://users-crud1.herokuapp.com/users/",newUser).then(()=>getUsers()).catch(error=>console.log(error.response))
    
    }
    const UpateUsers=(newUser)=>{

        axios.put(`https://users-crud1.herokuapp.com/users/${newUser.id}/`,newUser).then(()=>getUsers())
    }
        
        const DeleteUsers=(id)=>{

            axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`).then(()=>getUsers())
            
            
            }     

const SelecteUser=(user)=>{

    setSelectedUser(user)

}
const deselectedUser=()=>setSelectedUser(null);



return(<div className="container-user-3">
<div className="container-user-2">
<div className=" item-user2">
<h1>users</h1>
</div>
  <div className=" item-user2">
    
        <FormItem  UpateUsers={UpateUsers}  postUsers={postUsers} selectedUser={selectedUser} deselectedUser={deselectedUser} />
      </div>
      </div>
      <div className="container-user">
    {user.map(p=>(
        <div className="item-user" key={p.id}>
          <h3>{p.first_name} {p.last_name}</h3>
          <p>{p.email}</p>
          <p>{p.birthday}</p>
          <i onClick={()=>SelecteUser(p)} className="fa fa-pencil" style={{color:"blue",fontSize:"30px",margin:"3px"}}></i>
          <i onClick={()=>DeleteUsers(p.id)} className="fa  fa-trash"  style={{color:"red",fontSize:"30px",margin:"3px"}}></i>
        </div>))}
        </div>
      
    
  
    </div>)


}
export default UserList;