var express = require('express');
var router = express.Router();
var User = require('../public/models/user')

router.route('/signup')
  .post(function(req, res, next) {
    var user = new User({email: req.body.email,password: req.body.password});
    
    user.save(function(err) {
      if (err) return next(err);
      res.send(200);
    });
  });

module.exports = router;