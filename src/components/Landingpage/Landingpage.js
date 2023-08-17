import React from 'react'
import Heropage from './Heropage'
import Footer from './Footer'
import Aboutpage from './Aboutpage'
import Contactus from "./Contactus";

 
function Landingpage() {


  return (
    <div className="container-fullwidth">
      <Heropage/>
       <Aboutpage/>
       <hr className="mb-4 text-center" style={{margin:"0px 120px",color:"lightgray"}}/>
       <Contactus/>
      <Footer/>
    </div>
  )
}

export default Landingpage