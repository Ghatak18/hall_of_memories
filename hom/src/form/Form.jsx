import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css';
import axios from "axios";

function Form(){
    const navigate = useNavigate();

    const[details,setDetails] = useState({
        name: "",
        desc: "",
        img: ""
    });

    const[name,setName] = useState();
    const[desc,setDesc] = useState();
    const[img,setImg] = useState();




    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          "name": `${name}`,
          "desc": `${desc}`,
          "img": `${img}`
        };
        axios.post("nodejs-production-8bbc.up.railway.app/add", userData).then((response) => {
          console.log(response.status, response.data.token);
        // },{
        //     headers: {
        //       // Overwrite Axios's automatically set Content-Type
        //       'Content-Type': 'application/json'
        //     }
           }
        );
          navigate('/finalpage');
      };

    
    
  return (
    <div className='container'>
       <section id="contact">
					<div className="content">
						<div id="form">
							<form action="" id="contactForm" method="post">
								<span>Name</span>
								<input type="text" name="name" className="name" placeholder="Enter your name" onChange={e => {setName(e.target.value);
                                       console.log(details.name);                             
                            }}/>
								<span>Description</span>
								<input type="text" name="email" className="email" placeholder="Give description in 2-3 words"  onChange={e => {setDesc(e.target.value);
                                       console.log(details.desc);                             
                            }}/>
								<span id="imglink">Image</span>
								<input type="text" name="captcha" className="captcha"  placeholder="Any social media image link"  onChange={e => {setImg(e.target.value);
                                       console.log(details.img);                             
                            }} />
								
								<input type="submit" name="submit" value="Send" className="submit" onClick={handleSubmit}/>
							</form>
						</div>
                    </div>    
			</section>
    </div>
  )
}

export default Form;