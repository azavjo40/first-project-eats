import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Order from '../pages/Order'
import Create from '../pages/Create' 
import Auth from '../pages/Auth'

function useRouters(isAuthUser ){

 

    if(isAuthUser){
        return (
            // user create
            <Switch>

           <Route path="/order" exact >
              <Order />
          </Route>

       
          <Route path="/create" exact >
              <Create/>
          </Route>

          <Route path="/" exact>
              <Home />
          </Route>

          <Route path="/menu" exact>
              <Menu />
          </Route>

          <Route path="/product/:id" >
              <Product />
          </Route>


          <Route path="/contact" exact >
              <Contact />
          </Route>

          <Route path="/blog" exact >
              <Blog />
          </Route>

          <Route path="/poduct/:id" exact >
               <Product />
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

          <Route path="/product/:id" >
              <Product />
          </Route>

        

          <Route path="/contact" exact >
              <Contact />
          </Route>

          <Route path="/blog" exact >
              <Blog />
          </Route>

          <Route path="/poduct/:id" exact >
               <Product />
           </Route>

           <Route path="/auth" exact >
              <Auth />
          </Route>

              <Redirect to="/create" />
    
      </Switch>
      )
}


export default useRouters