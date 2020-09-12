import React, { useContext } from 'react';
import AuthenticatedUser from '../component/AuthenticatedUser';
import { UserProvider } from './context/Users';
import { useRecoilState } from 'recoil';
import {theme} from '../store';

function Home(props){ 
  const [currentTheme, setCurrentTheme] = useRecoilState(theme)
  return (
     
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <select className="form-control mt-4" value={currentTheme} onChange={(e) =>setCurrentTheme(e.target.value)}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </div>
          <div className="mt-2">
            <UserProvider>
              <div className="d-flex">
                  <div className="mr-1">Helo </div>
                  <AuthenticatedUser/>
              </div> 
            </UserProvider>
          </div>
        </div>
      
  )
}

export default Home