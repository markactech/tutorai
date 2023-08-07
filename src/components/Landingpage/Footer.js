import React from 'react'

function Footer() {
  return (
    <div className="container">
   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
   <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
   <span class="mb-3 mb-md-0 text-muted">© TutorAI.com</span>
      </a>
     
    

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a class="nav-link px-2 text-muted"  href="#"> Home </a></li>
      <li className="ms-3"><a class="nav-link px-2 text-muted" href="#"> About </a></li>
      <li className="ms-3"><a class="nav-link px-2 text-muted"  href="#">Contact </a> </li>
    </ul>
  </footer>
  </div>
  )
}

export default Footer
 