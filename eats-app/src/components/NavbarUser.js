import {useState, useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import open from '../images/openMenu.png'
import '../styleComp/menuNav.css'
function EastnasUser() {
const history = useHistory()
// auth для выйти с сайта очистить
const atuthLo = useContext(AuthContext)
// фн для очиски локолстороч что бы выйти
const logoutHandler = event => {
event.preventDefault()
atuthLo.logout()
// для очиска хистория бравзер
history.push('/')
}
const [isLoad, setIsLoad] = useState(false)
const openMenu = e=>{
setIsLoad(!isLoad)
}
return(
<>
  <div className={isLoad ? 'openM' : 'menuNav' } onClick={()=>setIsLoad(false)}>
    <h3>Personal-Area</h3>
    <p>
      <NavLink to="/">Home</NavLink>
    </p>
    <p>
      <NavLink to="/menu">Menu</NavLink>
    </p>
    <p>
      <NavLink to="/mymenu">MyMenu</NavLink>
    </p>
    <p>
      <NavLink className="linkBar" to="/create">Create</NavLink>
    </p>
    <p>
      <NavLink className="linkBar" to="/order">Order</NavLink>
    </p>
    <p>
      <NavLink className="linkBar" to="/mycontacts">MyContacts</NavLink>
    </p>
    <p onClick={logoutHandler } style={{color: 'white', cursor: 'pointer'}}>Go Out</p>
    <h1 className="h1Close">+</h1>
  </div>
  <div className={isLoad ? 'closeMenu' : 'openMenu' }>
    <img src={open} alt="open" onClick={openMenu} />
  </div>
</>
)
}
export default EastnasUser