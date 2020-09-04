import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound(){
  return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="display-6 text-danger">
              <p>Page Not Found</p>    
              <small>
              <NavLink className="nav-link" to="/">Back To Home</NavLink>         
              </small>
            </div>   
        </div>
      </div>
  )
}

export default NotFound;