import {useState} from 'react'
import MyLogin from '../components/MyLogin'
import MyRegister from '../components/MyRegister'
function Auth() {
  const [islo, setIslo] = useState(true)
return (
<>
{islo ? <MyLogin islo={islo} setIslo={setIslo} />:<MyRegister islo={islo} setIslo={setIslo}  />}
</>
)
}
export default Auth