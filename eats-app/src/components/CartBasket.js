import React, { useCallback, useEffect, useState } from 'react'
import '../styleComp/menu.css'
function CartBasket({cart, removeFromCart}) {
const [valu, setValue] = useState([])
const [costs, setCosts] = useState([])
const radioChange = (e)=>{
const check = e.target.checked
if(check){
setValue({...valu,[e.target.name]: e.target.value })
}
}

const reduceChange = useCallback(()=>{
const red = cart.reduce((a, b)=>{
return a + b.cost
},0)
setCosts(red)
},[cart])
useEffect(()=>{
reduceChange()
console.log(costs, valu)
},[reduceChange,costs,valu])
return(
<div className="cont">
  {cart.map((product, i)=> (
  <div className="product" key={ i}>
    <div key={product._id}>
      <h5>{product.name}</h5>
      <div className="input">
        <label><input type="radio" name={`sos${i}`} value={`${product.name}${i}-ostry${i}`} onChange={(e)=>radioChange(e)}
          /> Ostry</label>
        <label><input type="radio" name={`sos${i}`}  value={`${product.name}${i}-lagondy${i}`} onChange={(e)=>radioChange(e)}
          /> Lagondy</label>
        <label><input type="radio" name={`sos${i}`}  value={`${product.name}${i}-mieszany${i}`} onChange={(e)=>radioChange(e)}
          />Mieszany</label>
        <label><input type="radio" name={`sos${i}`}  value={`${product.name}${i}-bez-sos${i}`} onChange={(e)=>radioChange(e)}
          /> Bez-Sos</label>
      </div>
      <h5>{product.cost} - PL</h5>
      <button className="remove" onClick={()=>removeFromCart(product)}
        >Remove</button>
    </div>
  </div>
  ))}
    <button className="buyButton" //onClick={()=>}
    >buy + {costs}-PL</button>
</div>
)

}
export default CartBasket