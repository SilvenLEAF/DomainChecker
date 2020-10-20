import M from 'materialize-css'
import '../../styles/AuthDoor.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'



import { AuthContext } from '../../contexts/subContexts/AuthContext'






function Login() {
  useEffect(()=>{
    M.AutoInit();
  })



  const { userData } = useContext(AuthContext);
  const history = useHistory();


  if(userData) history.push('/')



  return (
    <div className="container myAuthDoor" >
      <div className="myAuthAppName">Domain Checker</div>
      <div className="myAuthTitle">Log in to your account</div>


      <form>




        <div className="myOauthButtonsHolder">
          
          <Link to="/loginForm">
          <div className="myOauthBtn myLocalAuth">
            <i className="fa fa-key"></i> Log in with Email
          </div>
          </Link>






          <div className="myOauthBtn myDemoAuth">
            <i className="fa fa-key"></i> Log in for DEMO
          </div>
        
          
          
          <div className="myOauthDividingOR">OR</div>
          <hr className="myOauthDividingHR"/>
          
          
          
          
          
          <a href="http://localhost:5000/auth/google" className="myOauthBtn myOauthGoogle">
            <i className="fa fa-google"></i> Continue with Google
          </a>
          
          
          
          
          <div className="myOauthBtn myOauthLinkedin">
            <i className="fa fa-linkedin"></i> Continue with LinkedIN
          </div>
          
          
          
          
          <a href="http://localhost:5000/auth/github" className="myOauthBtn myOauthGithub">
            <i className="fa fa-github"></i> Continue with Github
          </a>
          
          
          
          <div className="myOauthBtn myOauthTwitter">
            <i className="fa fa-twitter"></i> Continue with Twitter
          </div>
          
          
          
          <div className="myOauthBtn myOauthInstagram">
            <i className="fa fa-instagram"></i> Continue with Instagram
          </div>


                            
          
          
          <a href="http://localhost:5000/auth/facebook" className="myOauthBtn myOauthFacebook">
            <i className="fa fa-facebook"></i> Continue with Facebook
          </a>
          
          
          
          


        </div>


        <div className="myAuthFormFooter">
          Need an account? <Link to="/signup">Sign up</Link>
        </div>


        
      </form>
    </div>
  )
}

export default Login
