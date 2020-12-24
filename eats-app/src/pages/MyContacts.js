import {useState, useEffect, useContext, useCallback} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useMesaage } from '../hooks/message.hook'
import {useHistory} from 'react-router-dom'
import '../styleComp/mycontacts.css'
const MyContacts = ()=>{
const history = useHistory()
const [contac, setContac] = useState({})
const message = useMesaage()
const auth = useContext(AuthContext)
const [contacts, setContacts] = useState([])

const contactsHandler = useCallback( async()=>{
const requestOptions = {
method: 'GET',
headers: {
"Authorization": auth.token
},
redirect: 'follow'
}
try{
const res = await fetch('/api/auth/mycontacts',requestOptions )
const date = await res.json()
setContacts(date)
}catch(e){}
},[auth.token])
useEffect(()=>{
contactsHandler()
},[contactsHandler])

const addCont = (con)=>{
setContac(con)
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
const res = await fetch(`/api/auth/contact/${contac._id}`,requestOptions )
const date = await res.json()
message(date.message)
history.push('/')
}catch(e){message(e)}
},[message, auth.token, contac._id,history])
return(
<div className="cont">
    {contacts.map((con, i)=>(
    <div className="cart" key={con._id}>
        <h5>Name: {con.name}</h5>
        <p>Phone: {con.phone}</p>
        <p>Date {new Date(con.date).toLocaleDateString()}</p>
        <p>Message: {con.message}</p>
        <div className="delete">
            <button onClick={()=>addCont(con)}
                >Confirm Deletion!</button>
            <button onClick={()=>deletehandler()}
                > Delete</button>
        </div>
    </div>
    ))}
</div>
)
}
export default MyContacts