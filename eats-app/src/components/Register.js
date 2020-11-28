import {useState} from 'react'
import {Container,Form ,Button, Col, Row } from 'react-bootstrap'
import { useHttp } from '../hooks/http.hook'

function Register() {
const { request} = useHttp()

const [form, setForm] = useState({
     name: '', surname: '', email: '', password: '', phone: ''
  })

  const changehandler = (event)=>{
    setForm({...form, [event.target.name]: event.target.value })
  
  } 

  const registerHandler = async ()=>{
    try {
    const data = await  request('http://localhost:5000/api/auth/register','POST',{...form})
    console.log('data',data)
    } catch (e) {}
  }
  return (
    <>
<Container fluid="md" style={{marginTop: "3rem"}}>
<Form >
 <Form.Label>Register</Form.Label>
<Row>
    <Col>
      <Form.Control
       placeholder="First name"
       name="name"
      value={form.name}
    onChange={changehandler}
        />
    </Col>
    <Col>
      <Form.Control
       placeholder="Last name"
       name="surname"
       value={form.surname}
       onChange={changehandler}
        />
    </Col>
  </Row>

  <Form.Group controlId="formBasicEmail">
   <Form.Label>Email</Form.Label>
    <Form.Control type="email"
     placeholder="Enter email" 
   name="email"
   value={form.email}
   onChange={changehandler}
     />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
     name="password"
     value={form.password}
     onChange={changehandler}
    />
  </Form.Group>

  <Form.Group controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control 
    type="phone" 
    placeholder="Phone" 
     name="phone"
     value={form.phone}
     onChange={changehandler}
    />
  </Form.Group>



  

  <Button 
  variant="primary"
   type="submit"
   onClick={registerHandler}
   >
    Submit
  </Button>
</Form>
</Container>
    </>
  )
}

export default Register