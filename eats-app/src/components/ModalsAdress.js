import {Modal, Form, Col, Button} from 'react-bootstrap'
import {useState } from 'react'
function ModalsAdress(props) {
const [form, setForm] = useState({ email: '', phone: '',
adress: '', nHose: '', check: '' , message: ''
})
const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value })
console.log({...form})
}
return (
<>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
      Enter the order address
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={changehandler} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="Phone" name="phone" onChange={changehandler} />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address Street</Form.Label>
        <Form.Control placeholder="1234 Main St" name="adress" onChange={changehandler} />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Home Number</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" name="nHose" onChange={changehandler} />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={changehandler } name="message" value={form.message} />
      </Form.Group>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" value="check" name="check" onClick={changehandler} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  </Modal.Body>
</>
);
}

export default ModalsAdress