

const Strategy = require('passport-github');
const User = require('../../models/User');







module.exports = GithubStrategy = new Strategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: `/auth/github/callback`
  },




  (accessToken, refreshToken, profile, done)=>{




    User.findOne({ 'github.githubId': profile.id }).then(existingUser =>{



      // if the user already exists, retrieve the account
      if(existingUser) return done(null, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos[0].value,
        
        createdAt: new Date(),
        isVerified: true,
        email: profile.emails[0].value,

        'github.githubId': profile.id,
        'github.email': profile.emails[0].value,

        'github.username': profile.displayName,
        'github.profileImage': profile.photos[0].value,
        
      }).then(newUser=> done(null, newUser));



    })
  }
)