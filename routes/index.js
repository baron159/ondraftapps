var express = require('express');
var router = express.Router();
var onDraftDB = require('../lib/onDraftDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in');
});

router.get('/registration', function (req, res) {
    res.render('userRegistration');
});

router.post('/register', function (req, res) {
    console.log(req.body);
    res.send({message:'Completed'});
});

module.exports = router;
