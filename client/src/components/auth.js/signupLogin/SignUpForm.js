import M from 'materialize-css'
import '../../../styles/auth/AuthDoor.scss'
import '../../../styles/auth/AuthForm.scss'


import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
 
 



import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import { Toast } from '../../../helpers/MyAlerts'




function SignUpForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();



  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [confirmPassword, setConfirmPassword] = useState('');

  const [gender, setGender]= useState('male');
  const [error, setError] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try {
      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })
  
      const newUser = {};
      if(username) newUser.username = username;
      if(email) newUser.email = email.toLowerCase();    
      if(password !== confirmPassword) return setError(`Type same password twice`);    
      if(password) newUser.password = password;
  
  
  
  
  
      
      const femaleIcons = [
        'userFemaleBlue',
        'userFemaleGreen',
        'userFemaleOrange',
        'userFemalePink',
        'userFemalePurple',
        'userFemaleRed',
        'userFemaleTheme',
        'userFemaleYellow',
      ]
      
      const maleIcons = [
        'userMaleBlue',
        'userMaleGreen',
        'userMaleOrange',
        'userMalePink',
        'userMalePurple',
        'userMaleRed',
        'userMaleTheme',
        'userMaleYellow',
      ]
  
      const n = Math.floor(Math.random() * maleIcons.length);
  
      newUser.profileImage = `/images/users/${ (gender === 'male') ?  maleIcons[n] : femaleIcons[n] }.png`
  
  
  
  
  
  
  
  
      
  
  
      const signupRes = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      });
      const signupData = await signupRes.json();
      if(signupData.error) setError(signupData.msg);
      
      console.log(signupData)
  
  
      
      
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





  
  useEffect(()=>{
    if(error){
      Toast.fire({
        icon: 'error',
        title: error
      })
    }
  }, [error])



  if(userData) history.push('/')

  return (
    <div className="container myAuthForm" >
      <div className="myAuthAppName">GamifyHouseWorks</div>
      <div className="myAuthTitle">Sign up a new account</div>

      <p className="center-align red-text"> { error } </p>


      <form onSubmit={ handleSubmit } >
        <div className="input-field">
          <i className="prefix fa fa-envelope"></i>
          <input type="email" value={ email } onChange={ e=> setEmail(e.target.value) } required />
          <label htmlFor="email">Email <span className="red-text">(Required)</span></label>
        </div>

        
        
        <div className="input-field">
          <i className="prefix fa fa-user-plus"></i>
          <input type="text" value={ username } onChange={ e=> setUsername(e.target.value) } required />
          <label htmlFor="username">Your Username <span className="red-text">(Required)</span></label>
        </div>



        <div className="input-field">
        <i className="prefix material-icons">memory</i>
          <input type="password" required autoComplete="off" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters long"

            value={ password } onChange={ e=> setPassword(e.target.value) }
           />
          <label htmlFor="password">Password <span className="red-text">(Required) </span> </label>
        </div>


        <div className="input-field">
          <i className="prefix material-icons">memory</i>
          <input type="password" autoComplete="off" value={ confirmPassword } onChange={ e=> setConfirmPassword(e.target.value) } required />
          <label htmlFor="confirmPassword">Confirm Password <span className="red-text">(Required)</span> </label>
        </div>
        
        
        
        
        <div className="input-field">
          <p>
          
            <label style={{ marginRight: "50px" }} >
              <input type="radio" id="maleRadio" className="with-gap" name="gender" onChange={ e=> setGender('male') } />
              <span>I'm Male</span>
            </label>
          
          
          
            <label >
              <input type="radio" id="femaleRadio" className="with-gap" name="gender" onChange={ e=> setGender('female') } />
              <span>I'm Female</span>
            </label>
          
          </p>        
          
          
         
        </div>




        <p className="myAgreeTermsAndConditions">
          By signing up you confirm that you've read and agreed our <a href="#">User Notice</a> and <a href="#">Privacy Policy</a>
        </p>


        <div className="input-field right-align">
          <button className="btn myBtn waves-effect waves-light">
            Sign up
          </button>
        </div>

       


        <div className="myAuthFormFooter">
          Already have an account? <Link to="/login">Log in</Link>
        </div>


        
      </form>
    </div>
  )
}

export default SignUpForm
