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
const res = await fetch('/api/order',requestOptions )
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
history.push('/')
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
    <h5>Name: {ord.name}</h5>
    <p>Phone: {ord.phone}</p>
    <p>Message: {ord.myMessage}</p>
    <p>{ord.valu.sos0}</p>
    <p>{ord.valu.sos1}</p>
    <p>{ord.valu.sos2}</p>
    <p>{ord.valu.sos3}</p>
    <p>{ord.valu.sos4}</p>
    <p>{ord.valu.sos5}</p>
    <p>{ord.valu.sos6}</p>
    <p>{ord.valu.sos7}</p>
    <p>{ord.valu.sos8}</p>
    <p>{ord.valu.sos9}</p>
    <p>{ord.valu.sos10}</p>
    <p>Total Amount Cost: {ord.valu.cost}+PLN</p>
    <p>Date {new Date(ord.date).toLocaleDateString()}</p>
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