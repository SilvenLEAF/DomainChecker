const User = require('../../models/User');
const bcrypt = require('bcryptjs');

const crypto = require('crypto');               // this is for creating a random token
const nodemailer = require('nodemailer');       // this is for sending email










/* --------------------------------------------
.            REPORT FORGOTTEN PASSWORD
-------------------------------------------- */
module.exports.report_forgotten_password = async (req, res, next)=>{
  try {
    


    // create token
    const buffer = await crypto.randomBytes(32)
      

      
    
      // convert hexadecimal buffer into string buffer
      const token = buffer.toString('hex');




      // find the user with the email sent from the frontEND
      const user = await User.findOne({ 'local.email': req.body.email });

      if(!user) return res.status(422).json({ msg: `User does not exist`, error: true });

      
      
      // save token with its expiration time on that user's model
      user.local.resetToken = token;
      user.local.resetTokenExpires = Date.now() + 3600000;

      await user.save()

      
      






      // send an email to the user's email account with the password reset link that is valid for only one hour
      //                   creatting the postman that will deliver our email
      const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: `noreplyleaf@gmail.com`,
          pass: process.env.GMAIL_PASSWORD
        }
      });


      



      // the content of that email
      const mailOptions = {
        to: user.local.email,
        from: 'noreplyleaf@gmail.com',

        subject: `Password Reset`,
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process: \n\n
        ${ 'https://' + req.headers.host + '/reset/' + token } \n\n
        If you did not request this, please ignore this email and your password will remain unchanged. \n`
      }






      // sending the mail to the user's email
      smtpTransport.sendMail(mailOptions, (err)=>{
        console.log(`Mail with password reset link is sent`);
        res.json({ msg: `Check your email` })
      })

      

      
  } catch (err) {
    next(err, req, res);
  }
}



















/* --------------------------------------------
.            RESET THE OLD PASSWORD
-------------------------------------------- */
module.exports.reset_old_password_with_new_one = async (req, res, next)=>{
  try {
    const { newPassword, token } = req.body;

    
    
    
    
    // find user by the token and expiration time
    const user = await User.findOne({ 'local.resetToken': token, 'local.resetTokenExpires': { $gt: Date.now() } });
    
    if(!user) return res.status(422).json({ msg: `Try again session expired`, error: true });




    // if there is a user, change their password and reset the resetToken and expiration time
    user.local.password = bcrypt.hashSync(newPassword, bcrypt.genSaltSync());
    user.local.resetToken = undefined;
    user.local.resetTokenExpires = undefined;




    const savedUser = await user.save();
    
    
    res.json({ msg: `Password updated` });






  } catch (err) {
    next(err);
  }
}