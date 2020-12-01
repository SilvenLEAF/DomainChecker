const User = require('../models/User');





/* ------------------------------------
.           GET ALL USERS
------------------------------------ */
module.exports.get_all_users = async (req, res, next)=>{
  try {
    const allUsers = await User.find({});

    /* this reverse() will give us the latest user on top of that array
    I mean, the newest user will be on the first place of that array */
    res.json(allUsers.reverse()); 

  } catch (err) {
    next(err, req, res);
  }
}








/* ------------------------------------
.   CHANGE EMAIL (in VERIFICATION)
------------------------------------ */
module.exports.change_email = async (req, res, next)=>{
  try{
    const { email } = req.body;

    await User.findByIdAndUpdate(req.user._id, { 'local.email': email });
    const updatedUser = await User.findById(req.user._id);
    res.json(updatedUser);
  } catch(err){
    next(err, req, next);
  }
}
















/* ------------------------------------
.           DELETE ACCOUNT
------------------------------------ */
module.exports.delete_account = async (req, res, next)=>{
  try{
    const { userId } = req.body;

    const deleteUser = await User.findByIdAndDelete(userId);
    res.json(deleteUser);
  } catch(err){
    next(err, req, next);
  }
}











/* ------------------------------------
.           UPDATE ACCOUNT
------------------------------------ */
module.exports.update_account = async (req, res, next)=>{
  try{
    const { userId } = req.body;

    await User.findByIdAndUpdate(userId, req.body);
    const updatedUser = await User.findById(req.user._id);
    res.json(updatedUser);
  }catch(err){
    next(err, req, res);
  }
}