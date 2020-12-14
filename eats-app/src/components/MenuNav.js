import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import open from '../images/openMenu.png'
import '../styleComp/menuNav.css'

function MenuNav() {
  const [isLoad, setIsLoad]  =  useState(false)
 const openMenu = ()=>{
     setIsLoad(!isLoad)
 }
  return(
      <>
 <div className={isLoad ? 'openM' : 'menuNav'} onClick={()=>setIsLoad(false)}>
     <h3>East-Kebab</h3>
<p><NavLink  to="/">Home</NavLink></p>
<p><NavLink   to="/menu">Menu</NavLink></p>
<p><NavLink to="/contact">Contact</NavLink></p>
<p><NavLink  to="/auth">Check to login</NavLink></p>
<h1 className="h1Close">x</h1>
 </div>
 <div className={isLoad ? 'closeMenu' : 'openMenu'}> 
<img src={open}  alt="open"  onClick={openMenu} />
</div>

 </>
    )
}

export default MenuNav