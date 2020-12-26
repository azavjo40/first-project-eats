import React, { useCallback, useEffect, useState } from 'react'
import '../styleComp/menu.css'
import ModalsAdress from './ModalsAdress'
function CartBasket({cart, removeFromCart}) {
var [valu, setValu] = useState([])
//const [checks, setChecks] = useState()
const [costs, setCosts] = useState([])
const radioChange = useCallback((e)=>{
const check = e.target.checked
 if(check){
//const arra = {...valu,[e.target.name]: e.target.value,cost: costs }

 // console.log(arra)

//setValu(arra)
setValu({...valu,[e.target.name]: e.target.value,cost: costs })
}
},[costs, valu])

 const mapChange = useCallback(()=>{
   console.log(valu)
 },[valu])
const reduceChange = useCallback(()=>{
const red = cart.reduce((a, b)=>{
return a + b.cost
},0)
setCosts(red)
},[cart])
useEffect(()=>{
reduceChange()
mapChange()
},[reduceChange,mapChange])
return(
<div className="cont">
  {cart.map((product, i)=> (
  <div className="product" key={ i}>
    <div key={product._id}>
      <h5>{product.name}</h5>
      <p style={{color: 'red'}}>выберете sos !!! </p>
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
      <button className="remove" 
      onClick={()=>{removeFromCart(product)
     // setValu(null)
     // setChecks(true)
      }}
       >Remove</button>
        
    </div>
    
  </div>
  ))}
    <ModalsAdress cost={costs}/>
</div>
)

}
export default CartBasket