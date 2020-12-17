import M from 'materialize-css'
import '../../../styles/auth/AuthDoor.scss'


import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
 
 



import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import { Toast } from '../../../helpers/MyAlerts'






function Signup() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const [error, setError] = useState('')


  const demoLogin = async ()=>{    

    try {
      
      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })
      
  
      const demoUser = { email: `demo@gmail.com`, password: `0123456789` };
      
      
      
  
      
  
  
      const loginRes = await fetch('/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(demoUser)
      });
      
      const loginData = await loginRes.json();
      if(loginData.error) setError(loginData.msg);
    
  
      
  
  
      const loggedInUserRes = await fetch('/user');
      const loggedInUserData = await loggedInUserRes.json();
      if(loggedInUserData.error) setError(loggedInUserData.msg);
  

      console.log(loggedInUserData); 
      
      if(loggedInUserData.user){
        
        setTimeout(()=>{
          setUserData(loggedInUserData.user);
          history.push('/');
        }, 3000)
      }
  
    } catch (err) {
      console.log(err);

      if(err.error) setError(err.msg);
    }
  }








  if(userData) history.push('/')







  return (
    <div className="container myAuthDoor"
      

    >
      <div className="myAuthAppName">DomainChecker</div>
      <div className="myAuthTitle">Sign up a new account</div>


      <form>




        <div className="myOauthButtonsHolder">
          

          <Link to="/signupForm">
          <div className="myOauthBtn myLocalAuth">
            <i className="fa fa-key"></i> Sign up with Email
          </div>
          </Link>
        
          



          <div className="myOauthBtn myDemoAuth" onClick={ demoLogin } >
            <i className="fa fa-key"></i> Log in for DEMO
          </div>



          
          
          <div className="myOauthDividingOR">OR</div>
          <hr className="myOauthDividingHR"/>
          
          
          
          
          
          <a href="/auth/google" className="myOauthBtn myOauthGoogle">
            <i className="fa fa-google"></i> Continue with Google
          </a>
          
          
          
          
          <a href="/auth/linkedin" className="myOauthBtn myOauthLinkedin">
            <i className="fa fa-linkedin"></i> Continue with LinkedIN
          </a>
          
          
          
          
          <a href="/auth/github" className="myOauthBtn myOauthGithub">
            <i className="fa fa-github"></i> Continue with Github
          </a>
          
          
          
          <a href="/auth/twitter" className="myOauthBtn myOauthTwitter">
            <i className="fa fa-twitter"></i> Continue with Twitter
          </a>
          
          
          
          <div className="myOauthBtn myOauthInstagram">
            <i className="fa fa-instagram"></i> Continue with Instagram
          </div>


                            
          
          
          <a href="/auth/facebook" className="myOauthBtn myOauthFacebook">
            <i className="fa fa-facebook"></i> Continue with Facebook
          </a>
          
          
          
          


        </div>


        <div className="myAuthFormFooter">
          Already have an account? <Link to="/login">Log in</Link>
        </div>


        
      </form>
    </div>
  )
}

export default Signup
