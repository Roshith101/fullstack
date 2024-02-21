import React, { useEffect, useState } from 'react'
import './assets/css/index.css';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
const App = () => {
//  const current_theme = localStorage.getItem('current_theme');
//  const[theme,setTheme] = useState(current_theme ? current_theme : 'light');

//  useEffect(()=>{
//    localStorage.setItem('current_theme',theme);
//  },[theme])

  return (
    // <div className={`container ${theme}`}>
    //    <Navbar theme={theme} setTheme={setTheme}/>
    // </div>
    <div className="container">
    <SignUp/>
    </div>
  )
}

export default App