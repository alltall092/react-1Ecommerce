import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import React,{useState } from 'react';
const Logout=({setIsLoggedin})=>{
const navigate=useNavigate();



const logout = () => {
    localStorage.removeItem("token");

    sessionStorage.removeItem("auth");
    setIsLoggedin(false);
  
  navigate("/");
  }
return(<div>

<Button variant="primary" onClick={logout}>

 Logout
      </Button>


</div>)
}
export default Logout;