import {Modal,Button, Col, Row,Form} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMesaage } from '../hooks/message.hook'
import '../styleComp/menu.css'
function ModalsAdress({setShow, show, costs, setCart, setPage, page, spare, array}) {
const message = useMesaage()
const { request, error, clearError,isLoading} = useHttp()
const [form, setForm] = useState({
name:'', phone:'', address:'', myMessage:''
})
const [butt, setButt] = useState(false)

const handleClose = () => setShow(false);

const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value, costs})
}
const orderHandler = async ()=>{
const spares = JSON.stringify(spare)
const arrays = JSON.stringify(array)
try {
const data = await request('http://azam-app-tj-js.pl/api/order','POST',{...form, spares, arrays})
message(data.message)
setTimeout(()=>{
setForm({ name:'', phone:'', address:'', myMessage:''})
setCart([])
handleClose()
setPage(!page)
},1500)

} catch (e) {}
}
useEffect(() => {
message(error)
clearError()
}, [ message, clearError, error]);
return (
<>
  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Your Address</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form.Label>Name and Phone</Form.Label>
        <Row>
          <Col>
          <Form.Control placeholder="Name..." name="name" value={form.name} onChange={changehandler} />
          </Col>

          <Col>
          <Form.Control placeholder="Phone..." name="phone" value={form.phone} onChange={changehandler} />
          </Col>
        </Row>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Ul Janinowka 1111 m.11" name="address" value={form.address}
            onChange={changehandler} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Additional Information</Form.Label>
          <Form.Control as="textarea" rows={3} name="myMessage" value={form.myMessage} onChange={changehandler} />
        </Form.Group>
    </Modal.Body>
    <Modal.Footer style={{justifyContent: 'space-around'}}>
      <Button variant="secondary" onClick={handleClose}> Back </Button>
      <Button variant="primary" disabled={isLoading} onClick={()=>{ orderHandler()
        setButt(true)
        setTimeout(()=>setButt(false),1500)
        }}>
        {butt? 'Loading…' : 'Click to Buy'}
      </Button>
    </Modal.Footer>
  </Modal>
</>
);
}

export default ModalsAdress