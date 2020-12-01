const canUpdateAccount = require('../permissions/canUpdateAccount');




module.exports = UpdateAccount = (req, res, next)=>{
  const { userId } = req.body;

  // if they can not update their account (I mean, if they do not have that permission)
  if(!canUpdateAccount(userId, req.user)) return res.status(400).json({ msg: `You can NOT update this account`, error: true });
  
  
  // if they have the permission to update the account
  next();

}