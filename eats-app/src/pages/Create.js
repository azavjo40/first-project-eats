import { useState, useEffect,useContext} from 'react'
import '../styleComp/create.css'
import { useMesaage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
//import {useHttpFile} from '../hooks/useHttpFile'

function Create() {
 
const auth = useContext(AuthContext)
  const message = useMesaage()
 // const {requestFile, loading, error, clearError} = useHttpFile()

const [form, setForm] = useState({
  name: '', cost: '', p: '' 
})
const [file, setFile] = useState()
//const [filename, setFilename] = useState()



  //  следить за ошибка и отправляем пз
//  useEffect(()=>{
 //   message(error)
 //   clearError()
  //  },[error,message, clearError])

const changehandler = (event)=>{
  setForm({...form, [event.target.name]: event.target.value })
 
} 

const fileChange = (e)=>{
   const fileField= e.target.files[0]
   setFile(fileField)

}

// отправка файл текст в сервер
const sendFile = async ()=>{
const formdata = new FormData();
formdata.append("name",form.name);
formdata.append("cost", form.cost);
formdata.append("p", form.p);
formdata.append("file", file);
const requestOptions = {
  method: 'POST',
  headers: {"Authorization": auth.token},
  body: formdata,
  redirect: 'follow'

};

 await fetch("/api/order", requestOptions)
.then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
}
  return (
    <div className="conCreate">

<button
onClick={sendFile}
>Send</button>

<textarea 
   rows="2" cols="55"
   name="p"
   value={form.p}
   onChange={changehandler}
   >
</textarea >

  <label>Paragraph</label>
    <input type="file"
    accept="image/png, image/jpeg"
    onChange={(e)=>{fileChange(e)}}
  
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