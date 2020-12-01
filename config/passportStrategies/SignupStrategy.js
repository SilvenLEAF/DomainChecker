

const Strategy = require('passport-local');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');











module.exports = SignupStrategy = new Strategy(
  {
    // overriding the default username with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },




  (req, email, password, done)=>{
    const { username, profileImage } = req.body;
    console.log(req.body);



    User.findOne({ 'local.email': email }, (err, user)=>{
      

      // if there is an error
      if(err) return done(err);




      // if the user already have an account
      if(user) return done({ msg: `This email is already taken`, error: true }, null);




      // if not, create a new account
      User.create({
        'local.email': email,
        'local.password': bcrypt.hashSync(password, bcrypt.genSaltSync()),


        createdAt: new Date(),
        username,
        profileImage,
        
      }).then(newUser=> done(null, newUser)); // Send it onto the Cookie-fyer. (IN REACT) send the  (err, user, info) onto the passport middleware used on the auth route
      
    })
  }
)