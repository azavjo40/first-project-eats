import {Modal,Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import '../styleComp/menu.css'
function ModalsAdress({cost}) {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [isLoading, setLoading] = useState(false);
useEffect(() => {
if (isLoading) {
simulateNetworkRequest().then(() => {
setLoading(false);
});
}
}, [isLoading]);

const handleClick = () => setLoading(true);

return (
<>
  <button className="buyButton" onClick={handleShow}>Next + {cost}-PL</button>
  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Your Address</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      I will not close if you click outside me. Don't even try to press
      escape key.
    </Modal.Body>
    <Modal.Footer style={{justifyContent: 'space-around'}}>
      <Button variant="secondary" onClick={handleClose}> Back </Button>
      <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
        {isLoading ? 'Loading…' : 'Click to Buy'}
      </Button>
    </Modal.Footer>
  </Modal>
</>
);
}

function simulateNetworkRequest() {
return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default ModalsAdress