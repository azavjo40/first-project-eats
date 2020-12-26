import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import MyMenu from '../pages/MyMenu'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Order from '../pages/Order'
import Create from '../pages/Create'
import Auth from '../pages/Auth'
import MyContacts from '../pages/MyContacts'

function useRouters(isAuthUser ){
if(isAuthUser){
return (
// user create
<Switch>
    <Route path="/order" exact>
        <Order />
    </Route>
    <Route path="/create" exact>
        <Create />
    </Route>
    <Route path="/" exact>
        <Home />
    </Route>
    <Route path="/menu" exact>
        <Menu />
    </Route>
    <Route path="/mymenu" exact>
        <MyMenu />
    </Route>
    <Route path="/product/:id">
        <Product />
    </Route>
    <Route path="/mycontacts" exact>
        <MyContacts />
    </Route>
    <Redirect to="/" />
</Switch>
)
}
return (
<Switch>
    <Route path="/" exact>
        <Home />
    </Route>
    <Route path="/menu" exact>
        <Menu />
    </Route>
    <Route path="/contact" exact>
        <Contact />
    </Route>
    <Route path="/auth" exact>
        <Auth />
    </Route>
    <Redirect to="/" />
</Switch>
)
}
export default useRouters