import { NextFunction, Request, Response, Router } from 'express'
import passport from 'passport';


const router = Router();




/* --------------------------------------
.                 LOGOUT
-------------------------------------- */
router.get('/logout', (req: Request, res: Response)=>{
  req.logOut();
  res.json({ msg: `Logged out` });
});










/* --------------------------------------
.                 DEMO
-------------------------------------- */
router.post('/demo', (req: Request, res: Response, next: NextFunction)=>{
  passport.authenticate('demo', (err, user, info)=>{
    // if there is any error (including the error I defined on the Strategy)
    if(err) return res.status(400).json(err);


    req.logIn(user, (err)=>{
      // if there is an error while logging in
      if(err) return res.status(500).json({ msg: `Oops, something went wrong`, error: err.message || true });



      // if everything is OK, return the user onto the Cookie-fyer
      return res.json(user);
    })



  })(req, res, next)
})

















/* --------------------------------------
.                 SIGNUP
-------------------------------------- */
router.post('/signup', (req: Request, res: Response, next: NextFunction)=>{
  passport.authenticate('local-signup', (err, user, info)=>{
    // if there is any error (including the error I defined on the Strategy)
    if(err) return res.status(400).json(err);


    req.logIn(user, (err)=>{
      // if there is an error while logging in
      if(err) return res.status(500).json({ msg: `Oops, something went wrong`, error: err.message || true });



      // if everything is OK, return the user onto the Cookie-fyer
      return res.json(user);
    })



  })(req, res, next)
})



























/* --------------------------------------
.                 LOGIN
-------------------------------------- */
router.post('/login', (req: Request, res: Response, next: NextFunction)=>{
  passport.authenticate('local-login', (err, user, info)=>{
    // if there is any error (including the error I defined on the Strategy)
    if(err) return res.status(400).json(err);



   req.logIn(user, (err)=>{
    //  if there is an error while logging in
    if(err) return res.status(500).json({ msg: `Oops, something went wrong`, error: err.message || true });



    // if everything is OK, send the user onto the Cookie-fyer
    return res.json(user);
   }) 
  })(req, res, next)
})

















export default router;


