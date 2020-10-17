import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'




function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <div id="myLandingTitle" className="pageTitle">
          DOMAIN Checker
        </div>
        
        <div className="myLandingDescription">
          Isn't is really frustrating to come up with the perfect name for your website only to find out that the domain name is not available? Not anymore! Check if the domain has already been taken with just a simple click.
        </div>

        <div className="myLandingBtnHolder">
          <Link to="/search" className="btn myBtn waves-effect waves-light myLandingBtn" >
            Check your Domain 
          </Link>
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
