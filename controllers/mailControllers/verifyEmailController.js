const User = require('../../models/User');
const bcrypt = require('bcryptjs');

const crypto = require('crypto');               // this is for creating a random token
const nodemailer = require('nodemailer');       // this is for sending email










/* --------------------------------------------
.            REQUEST VERIFICATION
-------------------------------------------- */
module.exports.request_verification = async (req, res, next)=>{
  try {
    


    // create token
    const buffer = await crypto.randomBytes(32)
      

      
    
      // convert hexadecimal buffer into string buffer
      const token = buffer.toString('hex');




      // find the user with the email sent from the frontEND
      const user = await User.findOne({ 'local.email': req.user.local.email });

      if(!user) return res.status(422).json({ msg: `User does not exist`, error: true });

      
      
      // save token with its expiration time on that user's model
      user.local.verificationToken = token;
      user.local.verificationTokenExpires = Date.now() + 3600000;

      await user.save()

      
      






      // send an email to the user's email account with the verification link that is valid for only one hour
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

        subject: `Verify Account`,
        text: `You are receiving this because you (or someone else) have requested the verification of the email for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process: \n\n
        ${ 'https://' + req.headers.host + '/verifyEmail/' + token } \n\n
        If you did not request this, please ignore this email. \n`
      }






      // sending the mail to the user's email
      smtpTransport.sendMail(mailOptions, (err)=>{
        console.log(`Mail with password verification link is sent`);
        res.json({ msg: `Check your email` })
      })

      

      
  } catch (err) {
    next(err, req, res);
  }
}



















/* --------------------------------------------
.            VERIFY ACCOUNT (EMAIL)
-------------------------------------------- */
module.exports.verify_email = async (req, res, next)=>{
  try {
    const { token } = req.body;

    
    
    
    
    // find user by the token and expiration time
    const user = await User.findOne({ 'local.verificationToken': token, 'local.verificationTokenExpires': { $gt: Date.now() } });
    
    if(!user) return res.status(422).json({ msg: `Try again session expired`, error: true });




    // if there is a user, change their password and reset the resetToken and expiration time
    user.isVerified = true;
    user.local.verificationToken = undefined;
    user.local.verificationTokenExpires = undefined;




    const savedUser = await user.save();
    
    
    res.json(savedUser);






  } catch (err) {
    next(err);
  }
}