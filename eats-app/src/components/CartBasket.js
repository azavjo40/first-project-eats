import React from 'react'
import '../styleComp/cardMenu.css'
function CartBasket({cart, removeFromCart}) {
  return(

    <>
    <div className="products" >
    {cart.map((product)=> (
    <>
    <div className="product" >
      <img  src={product.image }  alt={product.name} className="imgProduct" />
      <h5   >{product.name}</h5> 
    <p>{product.p}</p>
    <p >{product.cost}<button onClick={()=>removeFromCart(product)} >Remove</button> </p>
    </div>
    </>
    ))}
    </div>
    </>
    )


}

export default CartBasket