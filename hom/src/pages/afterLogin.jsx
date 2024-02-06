import './afterLogin.css';
import Peoples from '../Peoples'
// import Header from './header'
// import Form from './form/Form'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AHeader from "../components/AHeader"

axios.defaults.withCredentials = true;

import { useEffect, useState } from 'react';
// import{ Link, useNavigate} from "react-router-dom"

function AfterLogin() {
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const[data1,setData1] = useState([]);
  function handleAdd(){
    navigate('/add');
  }

  useEffect(() =>{
    fetch("http://localhost:3000/").then(res => res.json()).then((data) =>{
      setData1(data);
      console.log(data1);
    
    }).catch((error) => {
      console.log(error);
  })},[]
  )
  return (
    <>
    {/* <div class="grid-container">
  <div class="card">Card 1 content goes here</div>
  <div class="card">Card 2 content goes here</div>
  <div class="card">Card 3 content goes here</div>
</div> */}


    <div className="App">
      <div className="head">
        <AHeader/>
      </div>
      <div className='grid-container'>
        {
          data1.map(
            (data) => {
              return(<div className='card1'><Peoples {...data}></Peoples></div>)
            }
          )
        
        }
      </div>
      {/* <Link to="/add"> <button onlick={() => navigate('/add')} className='addbtn'>ADD</button></Link> */}
      <div className='btncontainer'>
      <button className="button-89" role="button" onClick = {handleAdd}>Add Yourself</button>
        
      </div>


    </div>
    </>
  );
}



export default AfterLogin;