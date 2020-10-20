import M from 'materialize-css'
import '../../styles/AuthDoor.scss'
import '../../styles/AuthForm.scss'


import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from '../../contexts/subContexts/AuthContext'

function SignUpForm() {
  useEffect(()=>{
    M.AutoInit();
  })



  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();



  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log('started signup')

    const newUser = {};
    if(username) newUser.username = username;
    if(email) newUser.email = email;
    
    if(password !== confirmPassword) return setError(`Type the password twice for confirmation`);
    
    if(password) newUser.password = password;

    newUser.profileImage = '/Logo.png'
    


    const signupRes = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    });
    const signupData = await signupRes.json();

    console.log(signupData)


    if(signupData.msg) return setError(signupData.msg);

    setUserData(signupData)



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
    <div className="container myAuthForm" >
      <div className="myAuthAppName">Domain Checker</div>
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
