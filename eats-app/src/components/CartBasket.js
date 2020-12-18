import React from 'react'
import '../styleComp/cartBasket.css'
function CartBasket({cart, removeFromCart}) {

  return(
    <div className="cont">
    <h1>Youer {cart.cost}basket</h1>
    <div className="baskets">
      {cart.map((product)=> (
      <div className="basket" key={product._id}>
        <h5>{product.name}</h5>
        <div className="selection">
          <label> <input type="radio" name={product._id} value="" /> lagodne</label>
          <label><input type="radio" name={product._id} value="" />ostry</label>
          <label><input type="radio" name={product._id} value="" />mieszanie</label>
        </div>
        <div className="complment-product">
          <label> <input type="checkbox" name="" value="" /> cola</label>
          <label> <input type="checkbox" name="" value="" /> cola</label>
          <label> <input type="checkbox" name="" value="" /> cola</label>
          <label> <input type="checkbox" name="" value="" /> cola</label>
          <label> <input type="checkbox" name="" value="" /> cola</label>
        </div>
        <div className="selButton">
          <button>-</button>
          <p>{product.cost} PL</p>
          <button>+</button>
        </div>
        <button className="remove" onClick={()=>removeFromCart(product)} >Remove</button>
      </div>
      ))}
    </div>
    <button className="buy">buy</button>
  </div>
    )


}

export default CartBasket