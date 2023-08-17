import React from 'react'
import img from "../../img.png"
function Aboutpage() {
  return (
    
    
    <div className="row featurette container-fluid mt-10 m-5 d-flex" id="about" >
       
 
      <div className="col-md-7 order-md-2 align-content-center mt-5">
        <h2 className="featurette-heading fw-normal lh-1">Good Teaching Professionals</h2>
        <p className="lead mt-3">Good Teacher is a god's gift for all . So we are providing that facility for learing and sharing knowlegde to the world.</p>
      </div>
      <div className="col-md-5 mb-3">
        <img src={img} width={"400px"} height={"400px"}/>
       </div>


    </div>
    
  )
}

export default Aboutpage