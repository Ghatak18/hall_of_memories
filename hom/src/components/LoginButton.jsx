import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./loginButton.css"


const LoginButton = () => {

    const navigate = useNavigate();
    function handleLogin(){
        navigate("/login");
    }
  return (
    <button class="button-89" role="button" onClick={handleLogin}>Login</button>
  )
}

export default LoginButton