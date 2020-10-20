import M from 'materialize-css'
// import './../../styles/Navbar.scss'



import React, { useContext, useEffect } from 'react'



import { AuthContext } from '../../contexts/subContexts/AuthContext';



import { Link } from 'react-router-dom'
import { SignedInMobileLinks, SignedInPCLinks } from './navLinks/SignedInLinks';
import { SignedOutMobileLinks, SignedOutPCLinks } from './navLinks/SignedOutLinks';






function Navbar() {  
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { userData, setUserData } = useContext(AuthContext)

  const mobileLink = userData ? <SignedInMobileLinks setUserData={ setUserData } /> : <SignedOutMobileLinks/>;
  const pcLink = userData ? <SignedInPCLinks setUserData={ setUserData } /> : <SignedOutPCLinks/>;





  return (
    <nav id="myNavbar" className="nav nav-wrapper scrollspy">
      <div className="container">

        <Link to= "/" className= "brand-logo">DomainChecker</Link>
        <div className="sidenav-trigger hide-on-large-only" data-target= "mobilenav" id="myHam">
            <div></div>   
            <div></div>
            <div></div>
        </div>




        <ul className="sidenav" id="mobilenav">
          { mobileLink }            
        </ul>



        

        <ul className="right hide-on-med-and-down">
          { pcLink }

          <li style={{marginLeft: '20px'}}>
            {
              userData && (
              <Link to="/profile" className="btn-floating center pulse myProfileNavIcon">             
                { userData && userData.username[0] }
              </Link>
              )
            }
          </li>
        </ul>
        




        <ul className="right hide-on-large-only">
          <li>
            {
              userData && (
                <Link to="/profile" className="btn-floating center pulse myProfileNavIcon">
                  { userData && userData.username[0] }
                </Link>
                )
              }
          </li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar
