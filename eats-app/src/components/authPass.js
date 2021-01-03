import {useState} from 'react'
import {Form ,Button,Modal } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
function AuthPass({setFormPas}) {
const [show, setShow] = useState(true)
const history = useHistory()
const handleClose = () =>{
setShow(false)
history.push('/menu')
}
const [form, setForm] = useState({ password: ''})
const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value })
}
return (
<>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Confirmation Denmark !!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={changehandler } name="password"
                    value={form.password} />
            </Form.Group>
            <Button variant="primary" 
            onClick={()=>{setFormPas(form)}}> Login</Button>
        </Modal.Body>
    </Modal>
</>
);
}
export default AuthPass