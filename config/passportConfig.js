const passport = require('passport');
const User = require('../models/User');




const LoginStrategy = require('./passportStrategies/LoginStrategy');
const SignupStrategy = require('./passportStrategies/SignupStrategy');



const FacebookStrategy = require('./passportStrategies/FacebookStrategy');
const GithubStrategy = require('./passportStrategies/GithubStrategy');
const GoogleStrategy = require('./passportStrategies/GoogleStrategy');











/* -----------------------------------
.      SERIALIZE AND DESERIALIZE
----------------------------------- */
passport.serializeUser((user, done)=>{
  done(null, user.id);
});


passport.deserializeUser((id, done)=>{
  User.findById(id).then(user=> done(null, user));
});







/* -----------------------------------
.             STRATEGIES
----------------------------------- */
passport.use('local-signup', SignupStrategy);
passport.use('local-login', LoginStrategy);


passport.use(GoogleStrategy);
passport.use(GithubStrategy);
passport.use(FacebookStrategy);