function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) next();
  else res.send(401);
}

module.exports.ensureAuthenticated = ensureAuthenticated