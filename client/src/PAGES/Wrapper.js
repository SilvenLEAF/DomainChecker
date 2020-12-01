import React from 'react'
import { Route, Switch } from 'react-router-dom';




import Login from '../components/auth.js/signupLogin/Login';
import Signup from '../components/auth.js/signupLogin/Signup';
import LogInForm from '../components/auth.js/signupLogin/LogInForm';
import SignUpForm from '../components/auth.js/signupLogin/SignUpForm';


import ForgottenForm from '../components/auth.js/reset/ForgottenForm';
import ResetPassword from '../components/auth.js/reset/ResetPassword';
import VerifyDoor from '../components/auth.js/verify/VerifyDoor';


import Home from '../components/home/Home'
import Profile from '../components/profile/Profile';
import Contact from '../components/contact/Contact';
import UserList from '../components/profile/UserList';
import UpdateProfile from '../components/profile/UpdateProfile';
import UserProfile from '../components/profile/UserProfile';
import ActionPage from '../components/actionPage/ActionPage';

import VerifyEmail from '../components/auth.js/verify/VerifyEmail';
import ChangeEmail from '../components/auth.js/verify/ChangeEmail';





function Wrapper() {
  
  return (
    <div id="myWrapper">
      

      <Switch>


        <Route exact path="/" component={Home} />
        


        <Route path="/actionPage" component={ActionPage} />
        
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/loginForm" component={LogInForm} />
        <Route path="/signupForm" component={SignUpForm} />

        
        <Route path="/verifyDoor" component={VerifyDoor} />
        <Route path="/verifyEmail/:token" component={VerifyEmail} />
        <Route path="/changeEmail" component={ChangeEmail} />


        <Route path="/forgotten" component={ForgottenForm} />
        <Route path="/reset/:token" component={ResetPassword} />
  


        <Route path="/profile" component={Profile} />
        <Route path="/updateProfile" component={UpdateProfile} />
        <Route path="/userProfile/:index" component={UserProfile} />
        <Route path="/allUsers" component={UserList} />
        <Route path="/contact" component={Contact} />




      </Switch>
      
  </div>
  )
}

export default Wrapper
