import React, { useContext } from 'react';
import AuthenticatedUser from '../component/AuthenticatedUser';
import { UserProvider } from './context/Users';

function Home(props){
  return (
      <div className="container">
          <UserProvider>
            <div className="d-flex">
                <div className="mr-1">Helo </div>
                <AuthenticatedUser/>
            </div> 
          </UserProvider>
      </div>
  )
}

export default Home