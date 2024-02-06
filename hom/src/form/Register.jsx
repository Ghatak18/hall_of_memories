import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css';
import axios from "axios";
import LoginButton from "../components/LoginButton" 

function Register(){
    const navigate = useNavigate();

    // const[details,setDetails] = useState({
    //     email: "",
    //     pass: "",
    //     confirmPass: ""
    // });

    const[email,setEmail] = useState();
    const[pass,setPass] = useState();
    const[confirmPass,setConfirmPass] = useState();


    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          "email1": `${email}`,
          "pass": `${pass}`,
          "confirmPass": `${confirmPass}`
        };
        axios.post("http://localhost:3000/register1", userData, config).then((response) => {
          console.log(response.status, response.data.token);
        },{
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          });
          navigate('/afterlogin');
      };

    
    
  return (
    <div className='container1'>
       <section id="contact">
					<div className="content1">
						<div id="form">
							<form action="" id="contactForm" method="post">
								<span>Email</span>
								<input type="text" name="name" className="name" placeholder="Enter Your Email" onChange={e => {setEmail(e.target.value);
                                       console.log(email);                             
                            }}/>
								<span>Password</span>
								<input type="text" name="email" className="email" placeholder="Set a Strong Password"  onChange={e => {setPass(e.target.value);
                                       console.log(pass);                             
                            }}/>
								<span id="imglink">Confirm Password</span>
								<input type="text" name="captcha" className="captcha"  placeholder="Confirm Your Password"  onChange={e => {setConfirmPass(e.target.value);
                                       console.log(confirmPass);                             
                            }} />
								
								<input type="submit" name="submit" value="Submit" className="submit" onClick={handleSubmit}/>
							</form>
						</div>
                    </div>    
			</section>
      <div className="lbtn">
        <LoginButton/>
      </div>
    </div>
  )
}

export default Register;