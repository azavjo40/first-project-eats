import React from 'react'
import {Form ,Button,Container } from 'react-bootstrap'
function Contact() {
  return (

    <>
<Container fluid="md" style={{marginTop: "3rem"}} >
<Form>
  <Form.Group controlId="formBasicEmail">

    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Surname</Form.Label>
    <Form.Control type="surname" placeholder="Surname" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Button variant="primary" type="Send">
    Submit
  </Button>
</Form>
 
</Container>
    </>

  )
  }

export default Contact