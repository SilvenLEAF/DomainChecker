const chalk = require('chalk');
if(process.env.NODE.ENV !== `production`){
  // if in DEVELOPMENT, require environment variables
  require('dotenv').config();
}





const express = require('express');
const path = require('path');













// ---------------------------FIRING EXPRESS APP
const app = express();
app.use(express.static(path.join(__dirname, `client/build`)));
















/* -------------------------------------------
.                   config
------------------------------------------- */
require('./config/mongodbConfig');









/* -------------------------------------------
.                   routes
------------------------------------------- */



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