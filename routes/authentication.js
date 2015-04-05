var express=require('express');
var router=express.Router();
var passport = require('passport');

router.route('/login')
  .post(passport.authenticate('local'), function(req, res) {
    res.cookie('user', JSON.stringify(req.user));
    res.send(req.user);
  });
  
router.route('/logout')
  .get(function(req, res, next) {
    req.logout();
    res.send(200);
  });
 
module.exports = router;

