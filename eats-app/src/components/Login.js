import {useState, useEffect, useContext} from 'react'
import {Form ,Button,Container } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMesaage } from '../hooks/message.hook'
function Login() {
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
  <Container fluid="md" style={{marginTop: "3rem"}}>
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
      <Button variant="primary" type="submit" onClick={loginHandler} disabled={loading}>
        Login
      </Button>
    </Form>
  </Container>
</>
)
}
export default Login