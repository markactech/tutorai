import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
function Heropage() {
  const navigate = useNavigate();
  const searchHandler = () => {

    navigate("/search")
  }
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Simplified learning using AI</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4"> We are help you to clear your doubts with the help for Technology. feel free to ask doubts and learn new things easy way.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-outline-info btn-md px-4 me-sm-3 fw-bold" onClick={searchHandler} >Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heropage