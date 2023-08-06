import React, { useState } from "react";
//import "./CartItem.css";
import { useDispatch } from "react-redux";
import "./CartItem.css";
import {deleteItem }from './Shopingcart.slice';
import Button from 'react-bootstrap/Button';
function CartItem({ id, title,productImgs, cantidad, price, updateQty,remover }) {
  const dispatch=useDispatch();
  const addOne = () => {
    updateQty(id, cantidad + 1);
  };
  const removeOne = () => {
    updateQty(id, cantidad - 1);
  };

  return (
    <div className="CartItem">
      <div> <img src={productImgs[0]} alt="imagenes"  id="imagenes"/>
            <h6>{title}</h6></div>
      <div>${price}</div>
      <div>
        <Button  className="button" onClick={removeOne} disabled={cantidad<= 1}>
          -
        </Button>
        {cantidad}
        <Button className="button"  onClick={addOne}>+
        </Button>
      </div>
      <div>${cantidad * price}</div>
      <div> <Button className="button" onClick={()=>remover(id)}>x
        </Button></div>
    </div>
  );
}

export default CartItem;