import React from 'react'
import "./registerButton.css"
import { useNavigate } from 'react-router-dom'

const RegisterButton = () => {
    const navigate = useNavigate();
    function handleRegister(){
        navigate("/register")
    }

  return (
    <button class="button-89" role="button" onClick={handleRegister}>Register</button>
  )
}

export default RegisterButton