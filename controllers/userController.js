const User = require('../models/User');



/* -----------------------------------
.            GET ALL USERS 
------------------------------------ */
module.exports.get_all_users = async (req, res, next)=>{
  try {
    const allUsers = await User.find({});
    res.json(allUsers.reverse());
  } catch (err) {
    next(err, req, res)
  }
}








/* -----------------------------------
.            DELETE ACCOUNT
------------------------------------ */
module.exports.delete_account = async (req, res, next)=>{
  try {
    const { userId } = req.body;

    const deletedUser = await User.findByIdAndDelete(userId);
    res.json(deletedUser)
  } catch (err) {
    next(err, req, res)
  }
}








/* -----------------------------------
.            UPDATE ACCOUNT
------------------------------------ */
module.exports.update_profile = async (req, res, next)=>{
  try {
    const { userId } = req.body;
    await User.findByIdAndUpdate(userId, req.body);
    const updatedUser = await User.findById(userId);


    res.json(updatedUser);
  } catch (err) {
    next(err, req, res)
  }
}