import React,{useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import {Deselectedcar} from './SelectCar-slice';
import {postCarList,updateCarList} from './Car.slice';
import {useDispatch,useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const Formcar=()=>{

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
      const selected=useSelector((state)=>state.selectedCar);
      useEffect(()=>{
if(selected){
    reset(selected)
}
      },[selected])
    const dispatch=useDispatch();

    const onSubmit = (data) =>{
    if(selected){
        dispatch(updateCarList(data,data.id))
    }else{
        dispatch(postCarList(data))
    }
   clear();
   Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
      }
      const clear = () => {
        reset({
          brand: "",
          model: "",
          color: "",
          year: null,
          price:null
        });
        dispatch(Deselectedcar())
      };
      return(
    <div>
        
    <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label  className="label">Brad</Form.Label>
      <Form.Control type="text" {...register("brand")} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="label">Model</Form.Label>
      <Form.Control type="text" {...register("model")} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label className="label">Color</Form.Label>
      <Form.Control type="text" {...register("color")}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label className="label">Year</Form.Label>
      <Form.Control type="text" {...register("year")}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Label className="label">price</Form.Label>
      <Form.Control type="text" {...register("price")}/>
    </Form.Group>
    <Button variant="success"type="submit" className="label">
      Submit
    </Button>
  </Form>
 
  </div>)




}
export default Formcar;