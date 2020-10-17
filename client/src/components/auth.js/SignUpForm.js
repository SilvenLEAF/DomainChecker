import M from 'materialize-css'
import '../../styles/AuthDoor.scss'
import '../../styles/AuthForm.scss'


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SignUpForm() {
  useEffect(()=>{
    M.AutoInit();
  })



  return (
    <div className="container myAuthForm" >
      <div className="myAuthAppName">Domain Checker</div>
      <div className="myAuthTitle">Sign up a new account</div>


      <form>
        <div className="input-field">
          <i className="prefix fa fa-envelope"></i>
          <input type="email" required />
          <label htmlFor="email">Email <span className="red-text">(Required)</span></label>
        </div>

        
        
        <div className="input-field">
          <i className="prefix fa fa-user-plus"></i>
          <input type="text" required />
          <label htmlFor="username">Your Username <span className="red-text">(Required)</span></label>
        </div>



        <div className="input-field">
        <i className="prefix material-icons">memory</i>
          <input type="password" required autoComplete="off" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters long"
           />
          <label htmlFor="password">Password <span className="red-text">(Required) </span> </label>
        </div>


        <div className="input-field">
          <i className="prefix material-icons">memory</i>
          <input type="password" autoComplete="off" required />
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
