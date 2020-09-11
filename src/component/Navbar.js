import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserProvider } from '../views/context/Users';
import AuthenticatedUser from './AuthenticatedUser';

function Navbar({ children }){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
          <NavLink className="navbar-brand" to="/">My App</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <NavLink exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <UserProvider>
                  <AuthenticatedUser/>
                </UserProvider>
              </NavLink>
              </li>
          </ul>

          </div>
          </div>
      </nav>

      <div className="py-4">
        {children}
      </div>
    </div>
  )
}

export default Navbar