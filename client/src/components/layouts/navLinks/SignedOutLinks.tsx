import React from 'react'
import { NavLink } from 'react-router-dom'






export const SignedOutMobileLinks = () => {
  
  return (
    <>
      <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-home"></i>Home</NavLink></li>
      <li><NavLink to="/login" className="sidenav-close" ><i className="fa fa-user"></i>Log in</NavLink></li>
      <li><NavLink to="/signup" className="sidenav-close" ><i className="fa fa-user-plus"></i>Sign up</NavLink></li>
      <li><NavLink to="/contact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="sidenav-close" ><i className="fa fa-info"></i>About Me</a></li>
    </>
  )
}







export const SignedOutPCLinks = () => {
  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/login" >Log in</NavLink></li>           
      <li><NavLink to="/signup">Sign up</NavLink></li>           
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" >About Me</a></li>
    </>
  )
}