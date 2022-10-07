import React,{useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './car.css'
import {setCarList,getCarList,deleteCarList} from './Car.slice';
import {SelectedCar} from './SelectCar-slice';
import {useDispatch,useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Formcar from './Formcar';

const Car=()=>{
const carlist=useSelector((state)=>state.carList);
    const dispatch=useDispatch()
useEffect(()=>{
dispatch(getCarList())
//axios.get('https://cars-crud.herokuapp.com/cars/').then(res=>dispatch(setCarList(res.data)))

},[])
const eliminar=(id)=>{

Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((id) => {
    if (id.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  dispatch(deleteCarList(id)) 
 


}
return(<div className="car-container">
     
     
     <div className="item-car item-car2">


    <Formcar/>
    </div>

    
    

    <div className="item-car">
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Model</th>
          <th>color</th>
          <th>year</th>
          <th>price</th>
          <th>update</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
      {carlist.map(p=>(
        <tr key={p.id}>
          <td>{p.id}</td>
          <td>{p.brand}</td>
          <td>{p.model}</td>
          <td>{p.color}</td>
          <td> {p.year}</td>
          <td> {p.price}</td>
          <td> <Button variant="primary" type="button" onClick={()=>dispatch(SelectedCar(p))}>
      update
      </Button></td>
          <td> <Button variant="danger" type="button" onClick={()=>eliminar(p.id)}>
        delete
      </Button></td>
        </tr>))}
    
      </tbody>
    </Table>
 
    </div>
    </div>
    )


}
export default Car;