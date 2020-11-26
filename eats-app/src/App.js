
import {BrowserRouter as Router} from 'react-router-dom'
import useRouters from './routers/routerClient';
import Eastnas from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import EastnasUser from './components/NavbarUser';


function App() {
  const isAuthUser = true
 const routers = useRouters(isAuthUser)
  return (
    <>
    <Router > 
  { isAuthUser ? <EastnasUser /> : <Eastnas /> }
    <div className="container"> 
     {routers}
      
    </div>
    </Router>
 
    </>
  )
}

export default App
