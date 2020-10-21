import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'










export const SignedInMobileLinks = ({ setUserData }) => {


  const history = useHistory();


  const handleLogout = ()=>{
    console.log('started log out')
    
    window.location.href = '/logout'
  }



  return (
    <>
      <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-home"></i>Home</NavLink></li>      
      <li><NavLink to="/profile" className="sidenav-close" ><i className="fa fa-user"></i>Profile</NavLink></li>
      <li><NavLink to="/allUsers" className="sidenav-close" ><i className="fa fa-users"></i>All Users</NavLink></li>
      <li><NavLink to="/contact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</NavLink></li>
      
      <li onClick={ handleLogout } ><NavLink to="/" className="sidenav-close" ><i className="fa fa-sign-out"></i>Log out</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="sidenav-close" ><i className="fa fa-info"></i>About Me</a></li>
    </>
  )
}











export const SignedInPCLinks = ({ setUserData }) => {



  const history = useHistory();

  const handleLogout = ()=>{
    setUserData({
      user: undefined,
    });
    history.push('/')
  }




  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>      
      <li><NavLink to="/allUsers" >All Users</NavLink></li>           
      <li><NavLink to="/contact">Contact Me</NavLink></li>           
      
      <li onClick={ handleLogout } ><NavLink to="/" className="sidenav-close" >Log out</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" >About Me</a></li>
    </>
  )
}