import {useState,useContext} from 'react'
import '../styleComp/create.css'
import { useMesaage } from '../hooks/message.hook'
import {AuthContext} from '../context/AuthContext'
import {Form ,Button,Modal} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
function ModalCreate() {
const [show, setShow] = useState(true);
const history = useHistory()
const handleClose = () =>{
setShow(false)
history.push('https://azam-app-tj-js.pl/menu')
}
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
handleClose()
}catch(e){
message(e.message)
}
}
return (
<>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Create Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Name" type="text" name="name" value={ form.name } onChange={changehandler} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Cost</Form.Label>
                <Form.Control placeholder="Cost" type="number" name="cost" value={form.cost} onChange={changehandler} />
            </Form.Group>

            <Form.Group>
                <Form.File id="exampleFormControlFile1" label=" Photo" type="file" accept="image/png, image / jpeg "
                    onChange={ (e)=> {
                    fileChange(e)}}
                    />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Paragraph</Form.Label>
                <Form.Control as="textarea" rows={3} name="p" value={ form.p } onChange={ changehandler } />
            </Form.Group>
            <Button variant="primary" type="Send" onClick={ orderHandler }>
                Create
            </Button>
        </Modal.Body>
    </Modal>
</>
);
}

export default ModalCreate