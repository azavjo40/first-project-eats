import {useState, useEffect} from 'react'
import {Modal, Form ,Button, Col, Row } from 'react-bootstrap'
import { useHttp } from '../hooks/http.hook'
import { useMesaage } from '../hooks/message.hook'

function MyRegister({islo, setIslo}) {
const [show, setShow] = useState(true);
const handleClose = () => setShow(false);
const message = useMesaage()
const { request, loading, error, clearError} = useHttp()

const [form, setForm] = useState({
name: '', surname: '', email: '', password: '', phone: ''
})

const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value })

}

// следить за ошибка и отправляем пз
useEffect(()=>{
message(error)
clearError()
},[error,message, clearError])

const registerHandler = async ()=>{
try {
const data = await request('/api/auth/register','POST',{...form})
message(data.message)
setForm({ name: '', surname: '', email: '', password: '', phone: ''})

} catch (e) {}
}

return (
<>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>Register</Form.Label>
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" name="name" value={form.name} onChange={changehandler} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" name="surname" value={form.surname}
                        onChange={changehandler} />
                    </Col>
                </Row>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Enter email" name="email" value={form.email} onChange={changehandler} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Password" name="password" value={form.password}
                        onChange={changehandler} />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Phone" name="phone" value={form.phone}
                        onChange={changehandler} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={registerHandler} disabled={loading}>
                    Register
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="warning" onClick={()=>{setIslo(!islo)}}
                >Go To Login</Button>
        </Modal.Footer>
    </Modal>
</>
);
}
export default MyRegister