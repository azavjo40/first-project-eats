import { useState, useEffect,useContext} from 'react'
import { useHttp } from '../hooks/http.hook'
import '../styleComp/create.css'
import { useMesaage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

function Create() {
 
const auth = useContext(AuthContext)

  const message = useMesaage()

  const {request, loading, error, clearError} = useHttp()

const [form, setForm] = useState({
  name: '', cost: '', p: '' 
})
 const {file, setFile} = useState({imageSrc: null})


  const fileChange = (e)=> {
  setFile({ imageSrc: URL.createObjectURL(e.target.files[0])})
  console.log(file)
}

  //  следить за ошибка и отправляем пз
  useEffect(()=>{
    message(error)
    clearError()
    },[error,message, clearError])

const changehandler = (event)=>{
  setForm({...form, [event.target.name]: event.target.value })
} 

const orderHandler = async ()=>{
  try {
        
    const data = await  request('/api/order','POST',{...form},{
      Authorization: auth.token
    })
    message(data.message)
    //setForm({ name: '', surname: '', email: '', password: '', phone: ''})
    
    } catch (e) {}
}


  return (
    <div className="conCreate">

<button
disabled={loading}
onClick={orderHandler}
>Send</button>

<textarea 
   rows="2" cols="55"
   name="p"
   value={form.p}
   onChange={changehandler}
   >
</textarea>

  <label>Paragraph</label>
<input type="file"
   // accept="image/png, image/jpeg"
    onChange={fileChange}
     />
  <label >Image</label>


 <input
  type="number"
  name="cost"
  value={form.cost}
  onChange={changehandler}
 />
  <label>Cost</label>

  <input
   type="text"
   name="name"
   value={form.name}
   onChange={changehandler}
  />
  <label>Name</label>

    </div>
  )
}

export default Create