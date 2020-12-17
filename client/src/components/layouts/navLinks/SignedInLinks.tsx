import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'


interface propsInterface {
  setUserData: Function
}







export const SignedInMobileLinks = (props: propsInterface) => {
  const { setUserData } = props;



  const history = useHistory();


  const handleLogOut = async ()=>{
   
    const response = await fetch('/logout');
    const data = await response.json();

    console.log(data);

    setTimeout(()=>{
      setUserData(null)

      history.push('/');
    }, 3000)
  }


  return (
    <>
      <li><NavLink to="/" className="sidenav-close" ><i className="fa fa-home"></i>Home</NavLink></li>      
      <li><NavLink to="/profile" className="sidenav-close" ><i className="fa fa-user"></i>Profile</NavLink></li>
      <li><NavLink to="/allUsers" className="sidenav-close" ><i className="fa fa-users"></i>All Users</NavLink></li>
      <li><NavLink to="/contact" className="sidenav-close" ><i className="fa fa-envelope"></i>Contact Me</NavLink></li>
      
      <li onClick={ handleLogOut } ><NavLink to="/" className="sidenav-close" ><i className="fas fa-sign-out-alt"></i>Log out</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="sidenav-close" ><i className="fa fa-info"></i>About Me</a></li>
    </>
  )
}











export const SignedInPCLinks = (props: propsInterface) => {
  const { setUserData } = props;


  const history = useHistory();

  const handleLogOut = async ()=>{
   
    const response = await fetch('/logout');
    const data = await response.json();

    console.log(data);

    setTimeout(()=>{
      setUserData(null)

      history.push('/');
    }, 3000)
  }




  return (
    <>
      <li><NavLink to="/" >Home</NavLink></li>      
      <li><NavLink to="/allUsers" >All Users</NavLink></li>           
      <li><NavLink to="/contact">Contact Me</NavLink></li>           
      
      <li onClick={ handleLogOut } ><NavLink to="/" className="sidenav-close" >Log out</NavLink></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" >About Me</a></li>
    </>
  )
}
