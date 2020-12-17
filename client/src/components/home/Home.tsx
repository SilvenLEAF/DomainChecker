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
        <h3 id="myLandingTitle" className="pageTitle">
          Domain Checker
        </h3>
        
        <div className="myLandingDescription">
          Isn't is really frustrating to come up with the perfect name for your website only to find out that the domain name is not available? Not anymore! Check if the domain has already been taken with just a simple click.
        </div>

        <div className="myLandingBtnHolder">
          <Link to="/actionPage" className="btn myBtn waves-effect waves-light myLandingBtn" >
            Check your Domain 
          </Link>
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
