import { Request, Response, NextFunction } from 'express'
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';

import canDeleteAccount from '../permissions/canDeleteAccount';




export default (req: Request, res: Response, next: NextFunction)=>{
  const reqUser = req.user as UserInterface;
  const { userId } = req.body;

  // if they can not delete their account (I mean, if they do not have that permission)
  if(!canDeleteAccount(userId, reqUser)) return res.status(400).json({ msg: `You can NOT delete this account`, error: true });
  
  
  // if they have the permission to delete the account
  next();

}