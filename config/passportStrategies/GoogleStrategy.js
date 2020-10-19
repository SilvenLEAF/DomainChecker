

const Strategy = require('passport-google-oauth20');
const User = require('../../models/User');







module.exports = GoogleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `/auth/google/callback`
  },




  (accessToken, refreshToken, profile, done)=>{



    User.findOne({ 'google.googleId': profile.id }).then(existingUser=>{


      // if the user already exists, retrieve the account
      if(existingUser) return done(null, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos[0].value,
        createdAt: new Date(),

        'google.googleId': profile.id,
        'google.email': profile.emails[0].value,

        'google.username': profile.displayName,
        'google.profileImage': profile.photos[0].value,
      }).then(newUser=> done(null, newUser));




    })
  }
)