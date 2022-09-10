import React,{useReducer} from 'react';
import Button from 'react-bootstrap/Button';
import { createStore } from 'redux'
function init(initialCount) {
    return {count: initialCount};
  }

    const reducer=(state, action)=> {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
          case 'reset':
            return init(action.payload);
        default:
          throw new Error();
      }
    }
const Products=({initialCount=0})=>{
    
const [state,dispatch]=useReducer(reducer,initialCount,init)
return(<div>
    
<h1>{state.count}</h1>
<button onClick={()=>dispatch({type:'increment'})}>Increment</button>
<button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
<button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
</div>)




}
export default Products;