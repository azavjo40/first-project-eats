import {BrowserRouter as Router} from 'react-router-dom'
import useRouters from './routers/routerClient';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import EastnasUser from './components/NavbarUser';
import 'materialize-css'
import MenuNav from './components/MenuNav';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
const {token, login, logout, userId} = useAuth()
const isAuthenticated = !!token
const routers = useRouters(isAuthenticated)
return (
<>
  <AuthContext.Provider value={{
      token,  login, logout, userId, isAuthenticated 
    }}>
    <Router>
      { isAuthenticated ?
      <EastnasUser /> :
      <MenuNav /> }
      <div>
        {routers}
      
    </div>
    </Router>
 </AuthContext.Provider>
    </>
  )
}

export default App
