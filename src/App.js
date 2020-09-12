import React from 'react';
import Router from './router';
import { useRecoilState } from 'recoil';
import {theme} from './store';

function App (){
  const [currentTheme, setCurrentTheme] = useRecoilState(theme)
  const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'
  return (
    <div className={`${defaultTheme} vh-100`}>
        <Router/>
    </div>
  )
}

export default App 