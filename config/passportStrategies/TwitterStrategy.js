

const Strategy = require('passport-twitter').Strategy;
const User = require('../../models/User');







module.exports = TwitterStrategy = new Strategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: `/auth/twitter/callback`
  },




  (accessToken, refreshToken, profile, done)=>{
    console.log(profile);

    User.findOne({ 'twitter.twitterId': profile.id }).then(existingUser=>{


      // if the user already exists, retrieve the account
      if(existingUser) return done(null, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos[0].value,
        createdAt: new Date(),
        isVerified: true,

        'twitter.twitterId': profile.id,
        

        'twitter.username': profile.displayName,
        'twitter.profileImage': profile.photos[0].value,


        twitterHandle: `@${ profile.username }`,
      }).then(newUser=> done(null, newUser));




    })
  } 
)