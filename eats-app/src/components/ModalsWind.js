import {Modal,Button} from 'react-bootstrap'
import { useState } from 'react'
import ModalsAdress from '../components/ModalsAdress'
import ModalsOrder from '../components/ModalsOrder'
function MyVerticallyCenteredModal(props) {
const [isLoading, setIsloading] = useState(false)

const handlChange = (e)=>{
e.preventDefault()
setIsloading( !isLoading )
}

return (
<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

  {isLoading ?
  <ModalsAdress /> :
  <ModalsOrder />}
  <Modal.Footer>
    <Button onClick={handlChange }>{isLoading ?'Back To Orders': 'Add Adress' }</Button>
  </Modal.Footer>
</Modal>
);
}

export default MyVerticallyCenteredModal