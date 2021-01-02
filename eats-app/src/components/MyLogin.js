import {useState, useEffect, useContext} from 'react'
import {Form ,Button,Modal } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMesaage } from '../hooks/message.hook'
import {useHistory} from 'react-router-dom'
function MyLogin({islo, setIslo}) {
const [show, setShow] = useState(true)
const history = useHistory()
const handleClose = () =>{
  setShow(false)
  history.push('/menu')
} 

// все логика логина тут
const auth = useContext(AuthContext)
const message = useMesaage()
const [form, setForm] = useState({ email: '', password: ''})
const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value })
}
//const [mess, setMess] = useState(null)
const { request, loading, error, clearError} = useHttp()
// следить за ошибка и отправляем пз
useEffect(()=>{
message(error)
clearError()
},[error,message, clearError])
// fn login
const loginHandler = async () =>{
try{
const data = await request('/api/auth/login','POST', {...form})
auth.login(data.token, data.userId)
setForm({ email: '', password: ''})
}catch(e){}
}
return (
<>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={changehandler } name="email"
            value={form.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={changehandler } name="password"
            value={form.password} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginHandler} disabled={loading}> Login</Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="warning" onClick={()=>{setIslo(!islo)}}
        >Go To Register</Button>
    </Modal.Footer>
  </Modal>
</>
);
}
export default MyLogin