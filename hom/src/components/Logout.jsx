import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./logout.css"
import axios from 'axios'

const Logout = () => {

    const navigate = useNavigate();
        function handleLogout(){
            axios.get("http://localhost:3000/logout");
        navigate('/');
        }
        
      
        
    
  return (
    <button class="button-89" role="button" onClick={handleLogout}>Logout</button>
  )
}

export default Logout