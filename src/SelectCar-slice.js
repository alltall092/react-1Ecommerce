import { createSlice } from "@reduxjs/toolkit";
export  const SelectCarSlice=
createSlice({
name:"CarSelected",
initialState:null,
   
reducers:{
SelectedCar:(state,action)=>{
const Selected=action.payload;
return Selected;


},
Deselectedcar:(state,action)=>{
return state=null;

}

}


});

export const {SelectedCar,Deselectedcar}=SelectCarSlice.actions;
export default SelectCarSlice.reducer