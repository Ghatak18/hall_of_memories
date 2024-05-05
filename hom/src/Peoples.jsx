import React from 'react'
import("../src/peoples.css")
function Peoples(props) {

    const{name,desc,img} = props;

    return(
        <>

        <div className="button-89">
  <div className="card_profile_img">
      <img className="img"src={img} alt=""></img>
  </div>
  
  <div className="card_content">
    <h3 className='span1'>{name}</h3>
    <span className='span0'>{desc}</span>
    {/* <p>As per profession i am developer but as per passion i am singer. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quia ipsa ullam facere veniam nam cupiditate sequi doloribus praesentium accusamus, nihil laboriosam nisi optio officia odio obcaecati quisquam expedita modi! */}
    {/* </p> */}
  </div>
 
</div>






        {/* <div className='card'>
          <div><img className = "imgg" src={img} alt ="error"></img></div>
          <div>
          <div className='attributes'>Name: {name}</div>
          <span className='desc'>{desc}</span>
          </div>
        </div> */}
        </>
        );
        
}

export default Peoples
