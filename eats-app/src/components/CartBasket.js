import React, { useCallback, useEffect, useState } from 'react'
import '../styleComp/cartBasket.css'
import ModalsAdress from './ModalsAdress'
function CartBasket({cart, removeFromCart, setCart, setPage, page}) {
const [array, setArray] = useState()
const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const [spare, setSpare] = useState([])
const [checks, setChecks] = useState(null)
const [checked, setChecked] = useState(false)
const [costs, setCosts] = useState([])
const radioChange = useCallback((e)=>{
const check = e.target.checked
setChecked(check)
setSpare({...spare, [e.target.name]:  e.target.value})
},[spare])
const reduceChange = useCallback(()=>{
const red = cart.reduce((a, b)=>{
return a + b.cost
},0)
setCosts(red)
},[cart])

const filter = useCallback(()=>{
let arr = []
cart.filter((e)=>{
return arr.push(e.name)
})
setArray({...array, arr})
},[array, cart])
useEffect(()=>{
reduceChange()
},[reduceChange])
return(
<>
  {cart.map((product, i)=> (
  <div className="pro" key={ i}>
    <div key={product._id}>
      <h5>{product.name}</h5>
      <p style={{color: 'red'}}>Wybierz sos !!! </p>
      <div className="input">
        <label><input type="radio" name={`sos${i}`} value={`${product.name}  : ostry`} onChange={(e)=>radioChange(e)}
          checked={checks}
          /> Ostry</label>
        <label><input type="radio" name={`sos${i}`}  value={`${product.name}  : lagondy`} onChange={(e)=>radioChange(e)}
          checked={checks}
          /> Lagondy</label>
        <label><input type="radio" name={`sos${i}`}  value={`${product.name}  : mieszany`} onChange={(e)=>radioChange(e)}
          checked={checks}
          />Mieszany</label>
        <label><input type="radio" name={`sos${i}`}  value={`${product.name}  : bez-sos`} onChange={(e)=>radioChange(e)}
          checked={checks}
          /> Bez-Sos</label>
      </div>
      <h5>{product.cost} - PL</h5>
      <button className="remove" value="" onClick={()=>{ removeFromCart(product)
        setSpare(null)
        setChecks(false)
        setArray(null)
        setTimeout(()=>setChecks(null),1000)
        }}
        >Usunąć</button>
    </div>
    <button className="buyButton" onClick={()=>{handleShow()
      filter()}}
      disabled={!checked}>Następny + {costs}-PL</button>
  </div>
  ))}
  <ModalsAdress setShow={setShow} show={show} costs={costs} setCart={setCart} setPage={setPage} page={page}
    setSpare={setSpare} spare={spare} array={array} />
</>
)

}
export default CartBasket