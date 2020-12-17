import { Router, Request, Response, NextFunction } from 'express'
import passport from 'passport';


const router = Router();









/* ------------------------------------------
.                 GOOGLE
------------------------------------------ */
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));



router.get('/auth/google/callback', 
  passport.authenticate('google'),
  (req: Request, res: Response)=>{
    res.redirect('/')
  }
)












/* ------------------------------------------
.                 GITHUB
------------------------------------------ */
router.get('/auth/github', passport.authenticate('github'));




router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req: Request, res: Response)=>{
    res.redirect('/');
  }
)










/* ------------------------------------------
.                 LINKEDIN
------------------------------------------ */
router.get('/auth/linkedin', passport.authenticate('linkedin', {
  scope: ['r_emailaddress', 'r_liteprofile']
}));




router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin'),
  (req: Request, res: Response)=>{
    res.redirect('/');
  }
)








/* ------------------------------------------
.                 TWITTER
------------------------------------------ */
// router.get('/auth/twitter', passport.authenticate('twitter'));




// router.get('/auth/twitter/callback',
//   passport.authenticate('twitter'),
//   (req: Request, res: Response)=>{
//     res.redirect('/');
//   }
// )





























export default router;