import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Basket from '../pages/Basket'
import Product from '../pages/Product'
import Contact from '../pages/Contact'


function useRouters(){
    return (
      <Switch>
          <Route path="/" exact>
              <Home />
          </Route>

          <Route path="/menu" exact>
              <Menu />
          </Route>

          <Route path="/product/:id" >
              <Product />
          </Route>

          <Route path="/basket"exact >
              <Basket />
          </Route>

          <Route path="/contact" exact >
              <Contact />
          </Route>

          <Route>
              <Redirect to="/" />
          </Route>
      </Switch>
      )
}


export default useRouters