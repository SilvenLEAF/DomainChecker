

const Strategy = require('passport-local');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const LoginStrategy = require('../../../Soul2.0/config/passportStrategies/LoginStrategy');






module.exports = LoginStrategy = new Strategy(
  {
    // overrinding default username to email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },




  (req, email, password,done)=>{


    User.findOne({ 'local.email': email }, (err, user)=>{


      // if there is an error
      if(err) return done(err);


      // if the user does not exist
      if(!user) return done({ msg: `No user found` }, null);


      // if the passworrd does not match
      const isPasswordValid = bcrypt.compareSync(password, user.local.password);
      if(!isPasswordValid) return done({ msg: `Invalid Credentials` }, null);


      return done(null, user)

    })

  }
)