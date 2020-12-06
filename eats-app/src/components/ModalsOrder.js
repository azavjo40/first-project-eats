import {Modal, Button, Form, Row, Col} from 'react-bootstrap'


function ModalsOrder() {
    return (
        <>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Wybierz Sos</h1>
        <Form.Group as={Row}>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="ostry"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="mieszanie"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="łagodny"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
        </Modal.Body>

        <Modal.Body>
       <h1>order</h1>
       <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
        </Modal.Body>

        <Modal.Body>
       <h1>order</h1>
       <Form.Row>
        <Button variant="outline-danger">-</Button>{' '}
<h1>00</h1>

   <Button variant="outline-success">+</Button>{' '}
  </Form.Row>
        </Modal.Body>
    
     </>
    );
  }
  

  export default ModalsOrder