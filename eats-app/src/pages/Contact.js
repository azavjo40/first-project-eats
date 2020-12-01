import {useState, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMesaage } from '../hooks/message.hook'

import {Form ,Button,Container } from 'react-bootstrap'
function Contact() {

  const message = useMesaage()

const [form, setForm] = useState({ name: '', phone: '', message: ''})


const changehandler = (event)=>{
  setForm({...form, [event.target.name]: event.target.value })
  
} 

//const [mess, setMess] = useState(null)
const { request, loading, error, clearError} = useHttp()

  //  следить за ошибка и отправляем пз
  useEffect(()=>{
    message(error)
    clearError()
    },[error,message, clearError])

    const contactHandler = async () =>{
      try{
      const data = await request('/api/auth/contact','POST', {...form})
        message(data.message)
        console.log(data)
        setForm({name: '', phone: '', message: ''})
    
      }catch(e){}
      }
  return (

    <>
<Container fluid="md" style={{marginTop: "3rem"}} >
<Form>
  <Form.Group controlId="formBasicEmail">

    <Form.Label>Name</Form.Label>
    <Form.Control 
    type="name" 
    placeholder="Name"
    onChange={changehandler }
    name="name"
    value={form.name}
     />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control
     type="phone" 
     placeholder="Phone"
     onChange={changehandler }
     name="phone"
     value={form.phone}
     />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control 
    as="textarea" rows={3}
    onChange={changehandler }
    name="message"
    value={form.message}
    />
  </Form.Group>

  <Button variant="primary"
   type="Send"
   onClick={contactHandler}
   disabled={loading}
   >
   
    Send Me
  </Button>
</Form>
 
</Container>
    </>

  )
  }

export default Contact