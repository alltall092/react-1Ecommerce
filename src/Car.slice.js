import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export  const CarSlice=
createSlice({
name:"carList",
initialState:[],
   
reducers:{
setCarList:(state,action)=>{
const carList=action.payload;
return carList;


}


}


});
export const getCarList=()=>dispatch=>{
    axios.get('https://cars-crud.herokuapp.com/cars/').then(res=>dispatch(setCarList(res.data)))

}
export const postCarList=(newCarList)=>dispatch=>{
    axios.post('https://cars-crud.herokuapp.com/cars/',newCarList).then(res=>
    dispatch(getCarList(res.data))).catch(error=>console.log(error.response))

}
export const deleteCarList=(id)=>dispatch=>{
    axios.delete(`https://cars-crud.herokuapp.com/cars/${id}/`).then(res=>
    dispatch(getCarList(res.data))).catch(error=>console.log(error.response))

}
export const updateCarList=(newCarList,id)=>dispatch=>{
    axios.put(`https://cars-crud.herokuapp.com/cars/${id}/`,newCarList).then(res=>
    dispatch(getCarList(res.data))).catch(error=>console.log(error.response))
    
}
export const {setCarList}=CarSlice.actions;
export default CarSlice.reducer