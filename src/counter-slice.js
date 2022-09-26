import { createSlice } from "@reduxjs/toolkit";
export  const counterSlice=
createSlice({
name:"counter",
initialState:{
counter:20,
name:"julio perez",
user:"",
userName:"julio ramirez",
color:false

},

reducers:{
increment:(state, action)=>{
 const count=action.payload
 state.counter+=parseInt(count);
},

decrement:(state)=>{
state.counter-=1
},
incrementByAmount:(state, action)=>{
    state.counter += action.payload
  },
cambiarValor:(state,action)=>{
     const userName=action.payload;
      state.userName=userName;
    


},
cambiarColor:(state)=>{
return !state


},
entrar:(state,action)=>{

const user=action.payload;
state.user=user;
return user;


}
}

});

export const {increment,decrement,incrementByAmount,cambiarValor,cambiarColor,entrar}=counterSlice.actions;
export default counterSlice.reducer