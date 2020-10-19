

const Strategy = require('passport-local');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');







module.exports = SignupStategy = new Strategy(
  {
    // by default Local Strategy uses username and password, we are overridding username wth email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },


  (req, email, password, done)=>{
    const { username, profileImage } = req.body;
    console.log(req.body);


    User.findOne({ 'local.email': email }, (err, user)=>{

      // if there are any errors, return the error
      if(err) return done(err);



      // if the user already have and account
      if(user) return done({ msg: `This email is already taken` }, null);




      // if the user does not exist on our database, create a new account
      User.create({
        'local.email': email,
        'local.password': bcrypt.hashSync(password, bcrypt.genSaltSync()),
        createdAt: new Date(),
        username,
        profileImage,

      }).then(newUser=> done(null, newUser))

    })
  }
)