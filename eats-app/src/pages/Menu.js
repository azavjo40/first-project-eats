import { useState } from 'react'
import CartMenu from '../components/CardMenu'
import CartBasket from '../components/CartBasket'
import '../styleComp/menu.css'
function Menu() {
  // тут забераем карть на которий нажали
  const [cart, setCart] = useState([])
  // перекулчения с карта на продукта
  const [page, setPage] = useState(true)
  // фн для збор карт нужна продукт указать как обект а не как масив
  const addToCart = (product)=>{
  setCart([...cart, {...product}])
 // console.log(cart)
  }
 // фн удаления с карта
 const removeFromCart = (productToRemove)=>{
 setCart(cart.filter(product => product !== productToRemove ))
 }
 return(
   <>
   <header className="header">
     <button
className={page? '' :'basket' }
     onClick={()=>{setPage(!page)} }
     >{cart.length} - basket</button>
     <button
className={page? 'back' :'' }
     onClick={()=>{setPage(!page)} }
     >back</button>
   </header>
 <div className="contMenu">
   {page? <CartMenu addToCart={addToCart} /> :
   <CartBasket removeFromCart={removeFromCart} cart={cart}  />
   }
 </div>
 </>
 )
 }

export default Menu