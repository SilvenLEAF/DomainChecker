const passport = require('passport');
const User = require('../../Soul2.0/models/User');




const LoginStrategy = require('../../Soul2.0/config/passportStrategies/LoginStrategy');
const SignupStrategy = require('../../Soul2.0/config/passportStrategies/SignupStrategy');



const FacebookStrategy = require('../../Soul2.0/config/passportStrategies/FacebookStrategy');
const GithubStrategy = require('../../Soul2.0/config/passportStrategies/GithubStrategy');
const GoogleStrategy = require('../../Soul2.0/config/passportStrategies/GoogleStrategy');











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