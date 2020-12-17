import passport from 'passport';
import User from '../models/User';




import DemoStrategy from './passportStrategies/DemoStrategy';
import LoginStrategy from './passportStrategies/LoginStrategy';
import SignupStrategy from './passportStrategies/SignupStrategy';






import GithubStrategy from './passportStrategies/GithubStrategy';
import GoogleStrategy from './passportStrategies/GoogleStrategy';
import LinkedinStrategy from './passportStrategies/LinkedinStrategy';
//  import TwitterStrategy from './passportStrategies/TwitterStrategy';








/* ------------------------------------
.     SERIALIZE AND DESERIALIZE
------------------------------------ */
passport.serializeUser<any, any>((user, done)=>{
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
passport.use('demo', DemoStrategy);






passport.use('google', GoogleStrategy);
passport.use('github', GithubStrategy);
passport.use('linkedin', LinkedinStrategy);




// passport.use(TwitterStrategy);