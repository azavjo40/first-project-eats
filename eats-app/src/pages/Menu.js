import { useState } from 'react'
import '../styleComp/cardMenu.css'
import CartMenu from '../components/CardMenu'
import CartBasket from '../components/CartBasket'
import basket from '../images/basket.png'
import back from '../images/back.png'
function Menu() {
  // тут забераем карть на которий нажали
  const [cart, setCart] = useState([])
  // перекулчения с карта на продукта
  const [page, setPage] = useState(true)
  // фн для збор карт нужна продукт указать как обект а не как масив
  const addToCart = (product)=>{
  setCart([...cart, {...product}])
  //console.log(product)
  }

 // фн удаления с карта
 const removeFromCart = (productToRemove)=>{
 setCart(cart.filter(product => product !== productToRemove ))
 }

 return(
 <div className="cont">
   <header className="header">
    <h3>{cart.length}</h3> 
    <img className={page?  'basket':''} src={basket} alt={basket.name}  onClick={()=>{setPage(!page)} } />
    <img  className={page? 'back':''} src={back} alt={back.name}  onClick={()=>{setPage(!page)} } />
   </header>
   {page ?
   <CartMenu addToCart={addToCart} />:
   <CartBasket removeFromCart={removeFromCart} cart={cart} />}
 </div>
 )

 }

export default Menu