import React from 'react'
import '../styleComp/cardMenu.css'
import remove from '../images/remove.png'
function CartBasket({cart, removeFromCart}) {
  return(
    <>
    
    
    <div className="products" >
    {cart.map((product, i)=> (
    <>
    <div className="product" key={i} >
    <h3 >{product.name}</h3>
    <h4 >{product.cost}</h4>
    <img  src={product.image }  alt={product.name} className="imgProduct" />
     <img  src={remove} alt="icon"  onClick={()=>removeFromCart(product)} className="iconRemove" />
    </div>
    </>
    ))}
    </div>
    
    </>
    )


}

export default CartBasket