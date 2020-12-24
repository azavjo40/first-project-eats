import {useState,useContext} from 'react'
import '../styleComp/create.css'
import { useMesaage } from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
function Create() {
const auth = useContext(AuthContext)
const message = useMesaage()
const [form, setForm] = useState({name: '', cost: '', p: '' })
const [file, setFile] = useState()
const changehandler = (event) => {
setForm({ ...form, [event.target.name]: event.target.value })
}
const fileChange = (e) => {
const fileField = e.target.files[0]
setFile(fileField)
}
const orderHandler = async ()=>{
try{
const formdata = new FormData();
formdata.append("name", form.name);
formdata.append("cost", form.cost);
formdata.append("p", form.p);
formdata.append("file", file);
const requestOptions = {
method: 'POST',
headers: {
"Authorization": auth.token
},
body: formdata,
redirect: 'follow'
}
const response = await fetch("/api/create", requestOptions)
const data = await response.json()
  message(data.message)
setForm({name: '', cost: '',imageSrc: '', p: '' })
setFile('')
}catch(e){
message(e.message)
}
}
return ( <div className="conCreate">
  <button onClick={ orderHandler }>
    Send </button>
  < textarea rows="2" cols="55" name="p" value={ form.p } onChange={ changehandler }> </textarea>
    <label> Paragraph </label> <input type="file" accept="image/png, image / jpeg " onChange={ (e)=> {
    fileChange(e)
    }
    }
    /> < label> Image </label>
      <input type="number" name="cost" value={form.cost} onChange={changehandler} /> <label> Cost </label> <input
        type="text" name="name" value={ form.name } onChange={changehandler} /> <label> Name </label>
</div>
)
}
export default Create