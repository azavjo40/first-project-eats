import React from 'react'
import '../styleComp/menu.css'
function CartBasket({cart, removeFromCart}) {
return(
<>
  {cart.map((product, i)=> (
  <div className="product" key={ i}>
    <div key={product._id}>
      <img src={product.imageSrc } alt={product.name} className="imgProduct" />
      <h5>{product.name}</h5>
      <p>{product.p}{product.length}</p>
      <button className="remove" onClick={()=>removeFromCart(product)} >Remove</button>
    </div>
  </div>
  ))}
</>
)

}
  export default CartBasket