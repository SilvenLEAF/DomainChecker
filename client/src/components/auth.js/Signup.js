import M from 'materialize-css'
import '../../styles/AuthDoor.scss'


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  useEffect(()=>{
    M.AutoInit();
  })



  return (
    <div className="container myAuthDoor" >
      <div className="myAuthAppName">Domain Checker</div>
      <div className="myAuthTitle">Sign up a new account</div>


      <form>




        <div className="myOauthButtonsHolder">
          

          <Link to="/signupForm">
          <div className="myOauthBtn myLocalAuth">
            <i className="fa fa-key"></i> Sign up with Email
          </div>
          </Link>
        
          



          <div className="myOauthBtn myDemoAuth">
            <i className="fa fa-key"></i> Log in for DEMO
          </div>



          
          
          <div className="myOauthDividingOR">OR</div>
          <hr className="myOauthDividingHR"/>
          
          
          
          
          
          <div className="myOauthBtn myOauthGoogle">
            <i className="fa fa-google"></i> Continue with Google
          </div>
          
          
          
          
          <div className="myOauthBtn myOauthLinkedin">
            <i className="fa fa-linkedin"></i> Continue with LinkedIN
          </div>
          
          
          
          
          <div className="myOauthBtn myOauthGithub">
            <i className="fa fa-github"></i> Continue with Github
          </div>
          
          
          
          <div className="myOauthBtn myOauthTwitter">
            <i className="fa fa-twitter"></i> Continue with Twitter
          </div>
          
          
          
          <div className="myOauthBtn myOauthInstagram">
            <i className="fa fa-instagram"></i> Continue with Instagram
          </div>


                            
          
          
          <div className="myOauthBtn myOauthFacebook">
            <i className="fa fa-facebook"></i> Continue with Facebook
          </div>
          
          
          
          


        </div>


        <div className="myAuthFormFooter">
          Already have an account? <Link to="/login">Log in</Link>
        </div>


        
      </form>
    </div>
  )
}

export default Signup
