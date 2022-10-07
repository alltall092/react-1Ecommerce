import React,{useEffect}from 'react';
import {addMovie,deleteMovie} from './Movie-slice';
import {selecteMovie} from './movieSelected-slice';
import {useSelector,useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { useForm } from "react-hook-form";
const Movie=()=>{
const movie=useSelector((state)=>state.movie);
const Selected=useSelector((state)=>state.movieSelected)
const dispatch=useDispatch();
const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
useEffect(() => {
  if(Selected){
reset(Selected);
}
},[Selected])
  const onSubmit = (data) =>{
    data.id=Date.now();
   dispatch(addMovie(data));
  }

return(<div>
<div className="col col-md-6">
  <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" {...register("name")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>genero</Form.Label>
        <Form.Control type="text" {...register("genre")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>duration</Form.Label>
        <Form.Control type="number" {...register("duracion")}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>release_date</Form.Label>
        <Form.Control type="date" {...register("release_date")}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>gerne</th>
          <th>duration</th>
          <th>date</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
      {movie.map(p=>(
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td>{p.genre}</td>
          <td>{p.duracion}</td>
          <td> {p.release_date}</td>
          <td> <Button variant="success" type="button" onClick={()=>dispatch(selecteMovie(p))}>
      update
      </Button></td>
          <td> <Button variant="success" type="button" onClick={()=>dispatch(deleteMovie(p.id))}>
        delete
      </Button></td>
        </tr>))}
    
      </tbody>
    </Table>
   
    </div>)

}
export default Movie;