import { useState } from 'react'
import '../styleComp/cartBasket.css'
function CartBasket({cart, removeFromCart}) {
const [collection, setCollection] = useState([])
const changeHandler = (e)=>{
 const checked =  e.target.checked
 if(checked){
     setCollection({...collection,[e.target.name]: e.target.value })
 }
}
const sendHandler = ()=>{
  console.log({...collection})
}
  return(
  <div className="cont">
    <div className="baskets">
      {cart.map((product, i)=> (
      <div className="basket" key={i}>
           <h5 >{product.name}</h5> 
        <div className="selection">
          <label> <input type="radio" name={product.name+ i} value="lagodne" onChange={(e)=>{changeHandler(e)}}

            /> Lagodne</label>
          <label><input type="radio"  name={product.name+ i} value="ostry" onChange={(e)=>{changeHandler(e)}}
         
            />Ostry</label>
          <label><input type="radio"  name={product.name+ i} value="mieszany" onChange={(e)=>{changeHandler(e)}}
          
            />Mieszanie</label>
        </div>
        <div className="complment-product">
          <label> <input type="checkbox" name="frytki" value="7" onChange={(e)=>{changeHandler(e)}}

            />Frytki</label>
          <label> <input type="checkbox" name="cola" value="5" onChange={(e)=>{changeHandler(e)}}

            /> Cola</label>
          <label> <input type="checkbox" name="baklava" value="5" onChange={(e)=>{changeHandler(e)}}

            />Baklava</label>
          <label> <input type="checkbox" name="ayran" value="5" onChange={(e)=>{changeHandler(e)}}

            />Ayran</label>
          <label> <input type="checkbox" name="pepsi" value="4" onChange={(e)=>{changeHandler(e)}}

            />Pepsi</label>
        </div>
         <div> <p>{product.cost} PL</p></div>
        <button className="remove" onClick={()=>removeFromCart(product)} >Remove</button>
      </div>
      ))}
    </div>
    <button className="buy" onClick={sendHandler}>buy</button>
  </div>
  )

  }

  export default CartBasket