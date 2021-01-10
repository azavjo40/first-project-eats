import {useState, useEffect, useContext, useCallback} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useMesaage } from '../hooks/message.hook'
import {useHistory} from 'react-router-dom'
import '../styleComp/mycontacts.css'
const Order = ()=>{
const [checked, setChecked] = useState(false)
const history = useHistory()
const [contac, setContac] = useState({})
const message = useMesaage()
const auth = useContext(AuthContext)
const [contacts, setContacts] = useState([])
const orderHandler = useCallback( async()=>{
const requestOptions = {
method: 'GET',
headers: {
"Authorization": auth.token
},
redirect: 'follow'
}
try{
const res = await fetch('http://azam-app-tj-js.pl/api/order',requestOptions )
const date = await res.json()
setContacts(date)
}catch(e){}
},[auth.token])
useEffect(()=>{
orderHandler()
},[orderHandler])
const addCont = (ord)=>{
setContac(ord)
}
const deletehandler = useCallback( async()=>{
const requestOptions = {
method: 'DELETE',
headers: {
"Authorization": auth.token
},
redirect: 'follow'
}
try{
const res = await fetch(`/api/order/${contac._id}`,requestOptions )
const date = await res.json()
message(date.message)
history.push('/menu')
}catch(e){message(e)}
},[message, auth.token, contac._id,history])
const inputchange = (e)=>{
const check = e.target.checked
setChecked(check)
}
return(
<div className="cont">
  {contacts.map((ord, i)=>(
  <div className="cart" key={ord._id}>
    <p>Name: {ord.name}</p>
    <p>Phone: {ord.phone}</p>
    <p>Message: {ord.myMessage}</p>
    <p>Kebab: {JSON.parse(ord.arrays).arr}</p>
    <p>Orders: {ord.spares}</p>
    <p>Total Amount {ord.costs} + PLN</p>
    <p>Date {new Date(ord.date).toLocaleTimeString()} - {new Date(ord.date).toLocaleDateString()}</p>
    <div className="delete">
      <label style={{marginRight: '10px'}}>
        <input type="checkbox" onChange={(e)=>inputchange(e)}
        onClick={()=>addCont(ord)}
        />Confirm Deletion!</label>
      <button onClick={()=>deletehandler()}
        disabled={!checked}
        > Delete</button>
    </div>
  </div>
  ))}
</div>
)
}
export default Order