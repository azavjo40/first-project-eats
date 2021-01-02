import React, { useCallback, useEffect, useState } from 'react'
import '../styleComp/menu.css'
import ModalsAdress from './ModalsAdress'
function CartBasket({cart, removeFromCart, setCart, setPage, page}) {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
const [spare, setSpare] = useState([])
const [checks, setChecks] = useState(null)
const [checked, setChecked] = useState(false)
const [costs, setCosts] = useState([])
const radioChange = useCallback((e)=>{
const check = e.target.checked
setChecked(check)
setSpare({...spare, [e.target.name]: e.target.value})
},[costs, spare])
const reduceChange = useCallback(()=>{
const red = cart.reduce((a, b)=>{
return a + b.cost
},0)
setCosts(red)
},[cart])
useEffect(()=>{
reduceChange()
},[reduceChange])
return(
<div className="cont">
  {cart.map((product, i)=> (
  <div className="product" key={ i}>
    <div key={product._id}>
      <h5>{product.name}</h5>
      <p style={{color: 'red'}}>выберете sos !!! </p>
      <div className="input">
        <label><input type="radio" name={`sos${i}`} value={`${product.name} : ostry`}
            onChange={(e)=>radioChange(e)}
          checked={checks}
          
          /> Ostry</label>
        <label><input type="radio" name={`sos${i}`} value={`${product.name} : lagondy`}
            onChange={(e)=>radioChange(e)}
          checked={checks}
       
          /> Lagondy</label>
        <label><input type="radio" name={`sos${i}`} value={`${product.name} : mieszany`}
            onChange={(e)=>radioChange(e)}
          checked={checks}
         
          />Mieszany</label>
        <label><input type="radio" name={`sos${i}`} value={`${product.name} : bez-sos`}
            onChange={(e)=>radioChange(e)}
          checked={checks}
       
          /> Bez-Sos</label>
      </div>
      <h5>{product.cost} - PL</h5>
      <button className="remove" value="" onClick={()=>{ removeFromCart(product)
        setSpare(null)
        setChecks(false)
        setTimeout(()=>setChecks(null),1000)
        }}
        >Remove</button>
          
    </div>
    <button className="buyButton" onClick={handleShow}
    disabled={!checked}
    >Next Buy+ {costs}-PL</button>
  </div>
  ))}
  <ModalsAdress setShow={setShow} show={show} costs={costs}
   setCart={setCart} setPage={setPage} page={page}  
    setSpare={setSpare} spare={spare}  />
</div>
)

}
export default CartBasket
