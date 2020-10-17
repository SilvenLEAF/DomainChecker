import M from 'materialize-css'
import '../../styles/AuthDoor.scss'
import '../../styles/AuthForm.scss'


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function LogInForm() {
  useEffect(()=>{
    M.AutoInit();
  })



  return (
    <div className="container myAuthForm" >
      <div className="myAuthAppName">Domain Checker</div>
      <div className="myAuthTitle">Log in to your account</div>


      <form>
        <div className="input-field">
          <i className="prefix fa fa-envelope"></i>
          <input type="email" required />
          <label htmlFor="email">Email <span className="red-text">(Required)</span></label>
        </div>

        


        <div className="input-field">
        <i className="prefix material-icons">memory</i>
          <input type="password" required autoComplete="off" />
          <label htmlFor="password">Password <span className="red-text">(Required) </span> </label>
        </div>


        

        
        <div className="input-field right-align">
          <button className="btn myBtn waves-effect waves-light">
            Log in
          </button>          
        </div>



        <div className="myAuthFormFooter">
          <p>
            Forgot password? <Link to="/signup">Reset password</Link>
          </p>
          <p>
            Need an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>


        
      </form>
    </div>
  )
}

export default LogInForm
