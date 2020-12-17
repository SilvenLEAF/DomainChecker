import { Request, Response, NextFunction } from 'express'
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';
import User from '../models/User';





/* ------------------------------------
.           GET ALL USERS
------------------------------------ */
export const get_all_users = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const allUsers = await User.find({});

    /* this reverse() will give us the latest user on top of that array
    I mean, the newest user will be on the first place of that array */
    res.json(allUsers.reverse()); 

  } catch (
    err) {
    next({err, req, res});
  }
}








/* ------------------------------------
.   CHANGE EMAIL (in VERIFICATION)
------------------------------------ */
export const change_email = async (req: Request, res: Response, next: NextFunction)=>{
  try{
    const reqUser = req.user as UserInterface
    const { email } = req.body;

    
    
    await User.findByIdAndUpdate(reqUser._id, { 'local.email': email });
    const updatedUser = await User.findById(reqUser._id);
    res.json(updatedUser);


  } catch(err){
    next({err, req, next});
  }
}
















/* ------------------------------------
.           DELETE ACCOUNT
------------------------------------ */
export const delete_account = async (req: Request, res: Response, next: NextFunction)=>{
  try{
    const { userId } = req.body;

    const deleteUser = await User.findByIdAndDelete(userId);
    res.json(deleteUser);


  } catch(err){
    next({err, req, next});
  }
}











/* ------------------------------------
.           UPDATE ACCOUNT
------------------------------------ */
export const update_account = async (req: Request, res: Response, next: NextFunction)=>{
  try{
    const reqUser = req.user as UserInterface;
    const { userId } = req.body;

    await User.findByIdAndUpdate(userId, req.body);
    const updatedUser = await User.findById(reqUser._id);
    res.json(updatedUser);


  }catch(err){
    next({err, req, res});
  }
}