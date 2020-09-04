import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import NotFound from '../views/errors/NotFound';
import Navbar from '../component/Navbar';
import Login from '../views/auth/Login';
import UsersIndex from '../views/users/Index';
import UsersShow from '../views/users/Show';

function Router(){
  return (
    <Switch>
        <Route exact path="/">
            <Navbar>
              <Home/>
            </Navbar>
        </Route>

        <Route path="/about">
            <Navbar>
              <About/>
            </Navbar>
        </Route>

        <Route exact path="/users">
            <Navbar>
              <UsersIndex/>
            </Navbar>
        </Route>

        <Route path="/users/:identifier">
            <Navbar>
              <UsersShow/>
            </Navbar>
        </Route>

        <Route path="/login" component={Login}/>
        
        <Route path="*" component={NotFound}/>

    </Switch>
     
  )
}

export default Router