// modules to help developing
import chalk from 'chalk';      // chalk makes colorful console.logs only to make our development easier





if(process.env.NODE_ENV !== 'production'){  
  // if we are on developemnt, load the development variables
  require('dotenv').config();
}



// core modules
import express, { Request, Response, NextFunction } from 'express';
import path from 'path'


import passport from 'passport';
import cookieSession from 'cookie-session';








// ----------------------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `client/build`)));







// -------------------------COOKIE AND PASSPORT
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [`orehasaikyounizettainaru`],
}));




app.use(passport.initialize());
app.use(passport.session());










/* -----------------------------------------
.                   config
----------------------------------------- */
import './config/mongodbConfig'
import './config/passportConfig'






/* -----------------------------------------
.                   routes
----------------------------------------- */
//                  auth routes
import oauthRoute from './routes/authRoutes/oauthRoute';
app.use(oauthRoute);
import authRoute from './routes/authRoutes/authRoute';
app.use(authRoute);
import userRoute from './routes/authRoutes/userRoute';
app.use('/user', userRoute);



//                  mail routes
import contactRoute from './routes/mailRoutes/ContactRoute'
app.use(contactRoute);
import resetPasswordRoute from './routes/mailRoutes/ResetPasswordRoute'
app.use(resetPasswordRoute);
import verifyEmailRoute from './routes/mailRoutes/VerifyEmailRoute'
app.use(verifyEmailRoute);




//                  MAIN routes
import dnsRoute from './routes/DnsRoute';
app.use(dnsRoute);




// CATCH-ALL HANDLER
app.get('*', (req: Request, res: Response, next: NextFunction)=>{
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
})



// ERRORS HANDLER
app.use((errorObjectWithRequestAndResponse: {err: any, req: Request, res: Response})=>{
  const {err, req, res} = errorObjectWithRequestAndResponse;
  
  console.log(chalk.red(err.message));
  console.log(err);

  res.json({ msg: 'Server Error!', error: err.message });
})











// -----------------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})