import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="  navbar navbar-expand-sm navbar-dark bg-dark  " aria-label="Third navbar example">
    <div className="container-fluid">
      <p className="navbar-brand" style={{marginTop:"15px",marginLeft:"10px"}}><h4>TutorAI</h4></p>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
      <ul className="navbar-nav mx-auto mb-2 mb-sm-0    me-sm-3 fw-bold">  
  <li className="nav-item   me-sm-3">
    <NavLink className="nav-link " to="/">Home</NavLink>
  </li>

  <li className="nav-item    me-sm-3 dropdown">
    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Subjects</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Maths</a></li>
      <li><a className="dropdown-item" href="#">Science</a></li>
      <li><a className="dropdown-item" href="#">Social</a></li>
    </ul>
  </li>
  <li className="nav-item  me-sm-3 " >
    <NavLink className="nav-link " to="/">Contact</NavLink>
  </li>
  <li className="nav-item  me-sm-3">
    <NavLink className="nav-link " to="#about">About</NavLink>
  </li>
</ul>

       
      </div>
    </div>
  </nav>
   )
}

export default Header