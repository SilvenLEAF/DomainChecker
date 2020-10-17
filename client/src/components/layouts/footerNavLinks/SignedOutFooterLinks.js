import React from 'react'
import { Link } from 'react-router-dom'




function SignedOutFooterLinks() {
  return (
    <>
     



      
     <div>
        <div className="myFooterIcons">
          <Link to="/" >
          <i className="fa fa-home"></i> Home
          </Link>
        </div>          
      </div>
      
    


      <div>
        <div className="myFooterIcons">
          <Link to="/login" >
          <i className="fa fa-user"></i> Log in
          </Link>
        </div>          
      </div>



      <div>
        <div className="myFooterIcons">
          <Link to="/signup" >
          <i className="fa fa-user-plus"></i> Sign up
          </Link>
        </div>          
      </div>




      

    
  





 
    </>
  )
}

export default SignedOutFooterLinks
