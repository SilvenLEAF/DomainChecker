

const Strategy = require('passport-local');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');











module.exports = DemoStrategy = new Strategy(
  {
    // overriding the default username with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },




  (req, email, password, done)=>{    
    console.log(req.body);

    const demoEmail = email;
    const demoPassword = password;


    User.findOne({ 'local.email': demoEmail }, (err, user)=>{
      

      // if there is an error
      if(err) return done(err);




      // if the user already have an account
      if(user) return done(null, user);




      // if not, create a new account
      User.create({
        'local.email': demoEmail,
        'local.password': bcrypt.hashSync(demoPassword, bcrypt.genSaltSync()),        

        'local.username': 'Monkey D Luffy',
        'local.profileImage': '/Demo.png',


        createdAt: new Date(),
        role: 'demo',
        isVerified: true,
        
        username: 'Monkey D Luffy',
        profileImage: '/images/users/Demo.png',
        
        about: `Ahoy there!! The future's Pirate King is here! I am Luffy, a pirate with a bounty of $1 BILLION Beli on my head. I'm the Captain of Mugiwara Kaizokudan. Everybody calls me Mugiwara no Luffy (Straw Hat Luffy). I ate Gomu Gomu Devil Fruit and became a Gomu Ningen (Rubber Man). I love eating meat a lot. Sea and pointy things are my weakness. I am sailing across the Deadlist Grand Line to find and attain One Piece. I will be the PIRATE KING after Gold D Roger!!!`,
        title: `Pirate Captain`,
        location: `Going Merry, sailing on Grand Line`,

        careerStatus: `Pirate Captain`,
        workingAt: `Mugiwara Kaizokudan`,

        websiteLink: `SilvenLEAF.github.io`,
        twitterHandle: `@SilvenLEAF`


        
      }).then(newUser=> done(null, newUser)); // Send it onto the Cookie-fyer. (IN REACT) send the  (err, user, info) onto the passport middleware used on the auth route
      
    })
  }
)