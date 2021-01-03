import { useState} from 'react'
import AuthPass from '../components/authPass'
import MyLogin from '../components/MyLogin'
import MyRegister from '../components/MyRegister'
import { useMesaage } from '../hooks/message.hook'
function Auth() {
  const message = useMesaage()
const [islo, setIslo] = useState(true)
const [formPas, setFormPas] = useState([])
if(formPas.password === '123'){
return (
<>
  {islo ?
  <MyLogin islo={islo} setIslo={setIslo} />:
  <MyRegister islo={islo} setIslo={setIslo} />}
</>
)
}else{message('Error  Wrong Password !!!') }
return (
<>
  <AuthPass setFormPas={setFormPas} />
</>
)
}
export default Auth