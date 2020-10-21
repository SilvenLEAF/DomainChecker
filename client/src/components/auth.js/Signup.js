import M from 'materialize-css'
import '../../styles/AuthDoor.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'


import { AuthContext } from '../../contexts/subContexts/AuthContext'







function Signup() {
  useEffect(()=>{
    M.AutoInit();
  })



  
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();



  const demoLogin = async (e)=>{
    e.preventDefault();
    console.log('started demo login')

    const demoUser = { email: `demo@gmail.com`, password: `123456Aa` };
    
    
    

    


    const loginRes = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(demoUser)
    });
    const loginData = await loginRes.json();

    console.log(loginData)




    setUserData(loginData)



    const loggedInUserRes = await fetch('http://localhost:5000/user');
    const loggedInUserData = await loggedInUserRes.json();

    console.log(loggedInUserData); 
    
    if(loggedInUserData.user){
      setUserData(loggedInUserData.user);
    }
    history.push('/');

  }








  if(userData) history.push('/')







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
        
          



          <div className="myOauthBtn myDemoAuth" onClick={ demoLogin } >
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
          Already have an account? <Link to="/login">Log in</Link>
        </div>


        
      </form>
    </div>
  )
}

export default Signup
