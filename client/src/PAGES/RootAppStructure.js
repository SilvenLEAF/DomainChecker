import React from 'react'




import Navbar from '../components/layouts/Navbar'
import Wrapper from './Wrapper';

import BackToTopButton from '../components/layouts/BackToTopButton'

import Footer from '../components/layouts/Footer'
import MobileFooterNav from '../components/layouts/MobileFooterNav'





function RootAppStructure() {
  return (
    <div>
      <Navbar/>
      <Wrapper/>

      
      <BackToTopButton/>
      <Footer/>
      <MobileFooterNav/>
    </div>
  )
}

export default RootAppStructure
