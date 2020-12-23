import {useState, useEffect, useContext, useCallback} from 'react'
import { AuthContext } from '../context/AuthContext'
const MyContacts = ()=>{
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
console.log(contacts)
return(
<>
{contacts.map((con, i)=>(
    <div key={con._id}>
    <h1>{con.name}</h1>
    </div>
))}
</>
)
}
export default MyContacts