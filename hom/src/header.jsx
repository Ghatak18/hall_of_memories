import React from 'react'
import "./header.css"
import { useNavigate } from 'react-router-dom'
import RegisterButton from "./components/RegisterButton"
import LoginButton from './components/LoginButton'
import Logout from './components/Logout'
function Header() {
  const navigate  = useNavigate();
  function handleRegister(){
    navigate('/register');
  }
  function handleLogin(){
    navigate('/login');
  }

  function handleLogout(){
    navigate('/logout');
  }
  return (  
    <div className='head1'>
      <div>
        <h1 className="title">Hall   Of  Memories</h1>
      </div>
      <div>
     
      <RegisterButton/>
      <LoginButton/>
      
      <Logout/>
      </div>
    </div>
  )
}

export default Header
