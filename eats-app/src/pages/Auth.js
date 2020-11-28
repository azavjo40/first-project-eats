import React from 'react'
import { useState } from 'react'
import {Button} from 'react-bootstrap'
import Login from '../components/Login'
import Register from '../components/Register'
function Auth() {
const [isLoading, setIsloading] = useState(false)


const handlChange = (e)=>{
e.preventDefault()
setIsloading( !isLoading )
}
  return (
    <>

    {isLoading ? <Login /> : <Register />}
<Button 
size="lg" block
style={{marginTop: "3rem"}}
variant="warning"
onClick={handlChange} 
>
  {isLoading ?  "Go to Register" :"Go to Login"}
</Button>

  
    </>
  )
}

export default Auth