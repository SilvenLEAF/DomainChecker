


const Strategy = require('passport-facebook');
const User = require('../../models/User');






module.exports = FacebookStrategy = new Strategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callback: '/auth/facebook/callback'
  },




  (accessToken, refreshToken, profile, done)=>{



    User.findOne({ 'facebook.facebookId': profile.id }).then(existingUser =>{


      // if the user already exists, retrieve the account
      if(existingUser) return done(null, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        createdAt: new Date(),
        profileImage: `http://graph.facebook.com/${ profile.id }/picture?type=large`,
        
        'facebook.facebookId': profile.id,
        'facebook.username': profile.displayName,
        'facebook.profileImage': `http://graph.facebook.com/${ profile.id }/picture?type=large`,


      }).then(newUser=> done(null, newUser));



    })
  }
)