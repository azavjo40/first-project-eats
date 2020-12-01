import { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import kebab from '../images/kebab.jpg'
import MyVerticallyCenteredModal from '../components/ModalsWind'
function CardsKebab() {
  const [modalShow, setModalShow] = useState(false);
  return (
   <>

     <Card className="MyKards"   >
  <Card.Img variant="top" src={kebab} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button 
    variant="primary"
    onClick={() => setModalShow(true)}
    >Add Order</Button>

    <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        
  </Card.Body>
  </Card>
   </>
    
    
  
    
  )
}

export default CardsKebab