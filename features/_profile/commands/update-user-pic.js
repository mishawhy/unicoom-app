const { updateUserPic } = require('../repository');
const { UPDATE_INFO_SUCCESS_MESSAGE, UPDATE_INFO_ERROR_MESSAGE } = require('../constants');
const cloudinary = require('cloudinary');

async function updateUser(req, res) {
  let user = {};
  const {
    user: { id },
  } = req;
  const profileSuccessMessage = UPDATE_INFO_SUCCESS_MESSAGE;
  // res.json({ file: req.file, body: req.body, id });
  try {
    console.log(req.file.secure_url);
    const pic = cloudinary.url(`${req.file.public_id}.${req.file.format}`, {
      transformation: [{ width: 400, height: 400, crop: 'lfill' }],
    });
    user = await updateUserPic({ pic, id });
    res.json({ pic });
  } catch (error) {
    res.json(error);
    user = error;
  }

  //
  // if (user.email) {
  //   req.session.messages = { success: profileSuccessMessage };
  //   req.session.userInfo = { ...user };
  //   res.redirect('/profile/edit');
  // }
  //
  // const databaseError = UPDATE_INFO_ERROR_MESSAGE;
  // req.session.messages = { errors: { databaseError } };
  // res.redirect('/profile/edit');
}

module.exports = updateUser;
