import { createSlice } from "@reduxjs/toolkit";
export  const MovieSlice=
createSlice({
name:"movie",
initialState:[
    {id:1,
    name:"avenger",
    genre:"accion",
    duracion:120,
    release_date:"4-4-2022"},
    {id:2,
        name:"wanted",
        genre:"accion",
        duracion:120,
        release_date:"05-4-2022"}

    ],
reducers:{
addMovie:(state,action)=>{
state.push(action.payload)


},
deleteMovie:(state,action)=>{
const id=action.payload;
const filterMovie=state.filter(p=>p.id!==id);
return filterMovie;


},

}


});

export const {addMovie,deleteMovie,selecteMovie}=MovieSlice.actions;
export default MovieSlice.reducer