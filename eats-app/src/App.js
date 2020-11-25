
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import useRouters from './routers/routerClient';
import Eastnas from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 const routers = useRouters()

  return (
    <>
    <Router > 
 <Eastnas />
    <div className="container"> 
     {routers}
      
    </div>
    </Router>
 
    </>
  )
}

export default App
