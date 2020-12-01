const passport = require('passport');
const User = require('../models/User');





const LoginStrategy = require('./passportStrategies/LoginStrategy');
const DemoStrategy = require('./passportStrategies/DemoStrategy');
const SignupStrategy = require('./passportStrategies/SignupStrategy');



const GithubStrategy = require('./passportStrategies/GithubStrategy');
const GoogleStrategy = require('./passportStrategies/GoogleStrategy');
const LinkedinStrategy = require('./passportStrategies/LinkedinStrategy');
//  const TwitterStrategy = require('./passportStrategies/TwitterStrategy');





/* ------------------------------------
.     SERIALIZE AND DESERIALIZE
------------------------------------ */
passport.serializeUser((user, done)=>{
  done(null, user.id);
});


passport.deserializeUser((id, done)=>{
  User.findById(id).then(user=> done(null, user));
});















/* ------------------------------------
.               STRATEGIES
------------------------------------ */
passport.use('local-signup', SignupStrategy);
passport.use('local-login', LoginStrategy);
passport.use('demo', DemoStrategy)



passport.use(GoogleStrategy);
passport.use(GithubStrategy);
passport.use(LinkedinStrategy);




// passport.use(TwitterStrategy);