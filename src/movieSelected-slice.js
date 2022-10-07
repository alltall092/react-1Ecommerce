import { createSlice } from "@reduxjs/toolkit";
export  const MovieSelectedSlice=
createSlice({
name:"movieSelected",
initialState:null,
   
reducers:{
selecteMovie:(state,action)=>{
const SelectedMovie=action.payload;
return SelectedMovie;


}

}


});

export const {selecteMovie}=MovieSelectedSlice.actions;
export default MovieSelectedSlice.reducer