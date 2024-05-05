import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css';
import axios from "axios";
// import Register from './Register';
import RegisterButton from '../components/RegisterButton';

function Login(){
    const navigate = useNavigate();

    // const[details,setDetails] = useState({
    //     email: "",
    //     pass: "",
    //     confirmPass: ""
    // });

    const[email,setEmail] = useState();
    const[pass,setPass] = useState();
    const[isRes,setIsRes] = useState();
    // const[confirmPass,setConfirmPass] = useState();




    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          "email2": `${email}`,
          "pass": `${pass}`
        };
        axios.post("nodejs-production-8bbc.up.railway.app/login", userData, {
          withCredentials: true
        }).then((response) => {
          console.log(response.status, response.data.token);
        // },{
        //     headers: {
        //       // Overwrite Axios's automatically set Content-Type
        //       'Content-Type': 'application/json'
        //     }
        //   };
          
          return axios.get("nodejs-production-8bbc.up.railway.app/isres")
        }).then((response) => {
          console.log(response.data);
          setIsRes(response.data);
          // console.log(isRes);
          console.log("helllow");
})
.catch((error) => {
  console.log(error);
}) ;

//         axios.get("nodejs-production-8bbc.up.railway.app/isres").then((data) => {
//           setIsRes(data);
// }).catch((error) => {
//   console.log(error);
// })    
console.log("Jah salaaa");
console.log(isRes);


      if(isRes == "Y"){
        navigate('/finalpage');
      }
      else if(isRes == "N"){
        navigate('/afterlogin');
      }
 }
      

    
    
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
								{/* <span>Password</span>
								<input type="text" name="email" className="email" placeholder="Set a Strong Password"  onChange={e => {setPass(e.target.value);
                                       console.log(pass);                             
                            }}/> */}
								<span id="imglink">Confirm Password</span>
								<input type="text" name="captcha" className="captcha"  placeholder="Type Your Password"  onChange={e => {setPass(e.target.value);
                                                                
                            }} />
								
								<input type="submit" name="submit" value="Submit" className="submit" onClick={handleSubmit}/>
							</form>
						</div>
                    </div>    
			</section>
      <div className='lbtn'>
        <RegisterButton/>
      </div>
    </div>
  )
}

export default Login;