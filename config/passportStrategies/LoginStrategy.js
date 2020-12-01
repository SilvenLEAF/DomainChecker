

const Strategy = require('passport-local');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');











module.exports = LoginStrategy = new Strategy(
  {
    // overriding default username with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },



  (req, email, password, done)=>{
    User.findOne({ 'local.email': email }, (err, user)=>{

      // if there is an error
      if(err) return done(err);


      
      // if the user does not exist
      if(!user) return done({ msg: `No user found`, error: true }, null);


      
      // if password does not match
      const isPasswordValid = bcrypt.compareSync(password, user.local.password);
      if(!isPasswordValid) return done({ msg: `Invalid Credentials`, error: true }, null);




      // if everything is OK, send the user onto the Cookie-fyer
      // (IN REACT) send the  (err, user, info) onto the passport middleware used on the auth route
      return done(null, user)

    })
  }
)