var express = require('express');
var router = express.Router();
var Show = require('../public/models/show')
var auth = require('../helpers/auth')

router.route('/subscribe')
  .post(auth.ensureAuthenticated, 
        function(req, res, next) {
          Show.findById(req.body.showId, function(err, show) {
            
            if (err) return next(err);
            
            show.subscribers.push(req.user.id);
            
            show.save(function(err) {
              if (err) return next(err);
              res.send(200);
            });
        });
  });
      
router.route('/unsubscribe')
  .post(auth.ensureAuthenticated, 
        function(req, res, next) {
          Show.findById(req.body.showId, function(err, show) {
            if (err) return next(err);
          
            var index = show.subscribers.indexOf(req.user.id);
            show.subscribers.splice(index, 1);
          
            show.save(function(err) {
              if (err) return next(err);
              res.send(200);
            });
          });
  });

module.exports = router;
  
