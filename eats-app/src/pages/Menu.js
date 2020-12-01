import React from 'react'
import {Row} from 'react-bootstrap'
import CardsKebab from '../components/CardsKebab'
function Menu() {
  return (
  

<div className="gdid" >
<Row  className="justify-content-md-center"  style={{justifyContent: 'space-around'}}>
  <CardsKebab />
  <CardsKebab />
  <CardsKebab />
  <CardsKebab />
  <CardsKebab />
  <CardsKebab />
  </Row>
  </div>

    
  )
}

export default Menu