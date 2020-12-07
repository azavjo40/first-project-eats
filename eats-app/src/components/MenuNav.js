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
 <div className={isLoad ? 'openM' : 'menuNav'} >
     <h3>East-Kebab</h3>
<a><NavLink  to="/">Home</NavLink></a>
<a><NavLink   to="/menu">Menu</NavLink></a>
<a><NavLink to="/contact">Contact</NavLink></a>
<a><NavLink  to="/contact">Contact</NavLink></a>
<a><NavLink  to="/auth">Check to login</NavLink></a>
 </div>
<div className="openMenu"> 
<img src={open}  alt="open"  onClick={openMenu} />
</div>
 </>
    )
}

export default MenuNav