import React from 'react'
import Heropage from './Heropage'
import Footer from './Footer'
import Header from './Header'
import Aboutpage from './Aboutpage'

function Landingpage() {
  return (
    <div className="container-fullwidth">
     
      <Heropage/>
       <Aboutpage/>
      <Footer/>
    </div>
  )
}

export default Landingpage