import { Request, Response, NextFunction } from 'express'
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';
import canUpdateAccount from '../permissions/canUpdateAccount';




export default (req: Request, res: Response, next: NextFunction)=>{
  const reqUser = req.user as UserInterface;
  const { userId } = req.body;

  // if they can not update their account (I mean, if they do not have that permission)
  if(!canUpdateAccount(userId, reqUser)) return res.status(400).json({ msg: `You can NOT update this account`, error: true });
  
  
  // if they have the permission to update the account
  next();

}