const chalk = require('chalk');

if(process.env.NODE_ENV !== `production`){
  // if in DEVELOPMENT, require environment variables
  require('dotenv').config();
}






const express = require('express');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');












// ---------------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, `client/build`)));










// ------------------------ COOKIE AND PASSPORT
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [`orehasaikyounizettainaru`],
}));




app.use(passport.initialize());
app.use(passport.session());















/* -------------------------------------------
.                   config
------------------------------------------- */
require('./config/mongodbConfig');
require('./config/passportConfig');








/* -------------------------------------------
.                   routes
------------------------------------------- */
app.use(require('./routes/authRoute'));
app.use(require('./routes/DnsRoute'));
app.use('/user', require('./routes/userRoute'))


// CATCH ALL HANDLER
app.get('*', (req, res, next)=>{
  try{
    res.sendFile(path.join(__dirname, `client/build/index.html`));
  } catch(err){
    next(err, req, res);
  }
})




// ----------------end of routes----------------







// ERROR HANDLER
app.use((err, req, res, next)=>{
  console.log(chalk.red(err.message));
  console.log(err);

  res.json({ msg: `Server ERROR`, error: err.message })
})















// ---------------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})