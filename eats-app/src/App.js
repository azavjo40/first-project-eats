
import {BrowserRouter as Router} from 'react-router-dom'
import useRouters from './routers/routerClient';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import EastnasUser from './components/NavbarUser';
import 'materialize-css'
import MenuNav from './components/MenuNav';

function App() {
  const isAuthUser = false
 const routers = useRouters(isAuthUser)
  return (
    <>
    <Router > 
  { isAuthUser ? <EastnasUser /> : <MenuNav/> }
    <div> 
     {routers}
      
    </div>
    </Router>
 
    </>
  )
}

export default App
