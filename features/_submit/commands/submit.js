const submitRepo = require('../repository');

async function submitMsg(req, res) {
  const user = {};
  const registerSuccessMessage = 'You have successfully send idea, you can now log in.';
  try {
    idea = await submitRepo.submitMsg(req.body);
  } catch (error) {
    idea = error;
  }
  if (idea.textBody) {
    req.session.messages = { success: registerSuccessMessage };
    res.redirect('/submit');
  }
}

module.exports = submitMsg;
