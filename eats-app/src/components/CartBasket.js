import React from 'react'
import '../styleComp/cardMenu.css'
function CartBasket({cart, removeFromCart}) {
  return(

    <>
     <h1>Youer basket</h1>
    <div className="products" >
     
    {cart.map((product)=> (
    <>
    <div className="product" key={product._id} >
      <img  src={product.imageSrc }  alt={product.name} className="imgProduct" />
      <h5   >{product.name}</h5> 
    <p>{product.p}</p>
    <p >{product.cost}PL<button onClick={()=>removeFromCart(product)} >Remove</button> </p>
    </div>
    </>
    ))}
    </div>
    </>
    )


}

export default CartBasket