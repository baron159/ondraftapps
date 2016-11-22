var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in');
});

router.get('/registration', function (req, res) {
    res.render('userRegistration');
});

module.exports = router;
