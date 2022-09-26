
import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FormItem=({UpateUsers,postUsers,selectedUser,deselectedUser})=>{
    const { register, handleSubmit, watch,reset, formState: { errors }, } = useForm();
   const [isvalid,setIsvalid]=useState(false);
useEffect(() => {
  if(selectedUser){
reset(selectedUser);
}


},[selectedUser])
   
    const onSubmit = (data) =>{
      //e.preventDefault();
      console.log(data);
      
      if(selectedUser){
UpateUsers(data)


      }else{
postUsers(data)
    }
    clear(); 
    }
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const validar=()=>setIsvalid(!isvalid)
    const clear = () => {
      reset({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday:""
      });
      deselectedUser();
    };

return(<div>

<Button variant="success" onClick={handleShow} className="button">
        Create New User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
       
       <div className="-input-container">
       <label>FirstName</label>
    <br/>
       <i class="fa fa-user"></i>
      <input  type="text" {...register("first_name",{ required: true })} />
      {errors.first_name && <span style={{color:"red"}}>This field is required</span>}
      </div>
      
      <div className="-input-container">
      <label>LastName</label>
       <br/>
       <i class="fa fa-user"></i>
      <input  type="text" {...register("last_name",{ required: true })} />
      {errors.last_name && <span style={{color:"red"}}>This field is required</span>}
      </div>
      <div className="-input-container">
      <label>Email</label>
      <br/>
      <i class="fa fa-envelope"></i>
      <input  type="text" {...register("email",{ required: true })} />
      {errors.email && <span style={{color:"red"}}>This field is required</span>}
      </div>
      <div className="-input-container">
      <label>Password</label>
      <br/>
     
      <div class="input-group mb-3">
      <i class="fa fa-lock"></i> 
  <input type={isvalid?'text':'password'}  {...register("password",{ required: true })} aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">{isvalid?(<><i className="fa fa-eye" onClick={validar}></i></>):(<><i className="fa fa-eye-slash" onClick={validar}></i></>)}</span>
  </div>
  {errors.password && <span style={{color:"red"}}>This field is required</span>}
  </div>
     
   
      </div>
      <div className="-input-container">
      <label>Birthday</label>
      <br/>
      <i class="fa fa-calendar"></i>
      <input  type="date" {...register("birthday",{ required: true })} />
      {errors.birthday && <span style={{color:"red"}}>This field is required</span>}
      </div>
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="success">
            Save Changes
          </Button>
        </Modal.Footer>
        </form> 
    
      </Modal>


</div>)

}
export default FormItem;