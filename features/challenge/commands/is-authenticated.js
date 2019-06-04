module.exports = function isAuthenticated(req, res, next) {
  if (req.user && req.isAuthenticated()) {
    return true;
  }

  return false;
};
