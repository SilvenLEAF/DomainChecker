const canDeleteAccount = require('../permissions/canDeleteAccount');




module.exports = DeleteAccount = (req, res, next)=>{
  const { userId } = req.body;

  // if they can not delete their account (I mean, if they do not have that permission)
  if(!canDeleteAccount(userId, req.user)) return res.status(400).json({ msg: `You can NOT delete this account`, error: true });
  
  
  // if they have the permission to delete the account
  next();

}