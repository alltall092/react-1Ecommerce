import { createSlice } from "@reduxjs/toolkit";
export  const usernameSlice=
createSlice({
name:"user",
initialState:"",
reducers:{
entrar:(state,action)=>{
const user=action.payload;
return user;

}
}

});

export const {entrar}=usernameSlice.actions;
export default usernameSlice.reducer