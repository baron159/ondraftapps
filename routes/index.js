var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.user);
  res.render('sign-in', {_csrf: req.csrfToken(), message:req.query.message});
});

router.post('/sign-in', function (req, res, next) {
    console.log(req.body);
    passport.authenticate('local-login', function (err, user, info) {
        if(err)
            return next(err);
        if(!user)
            return res.redirect('/?message=User+Information+not+correct');
        req.login(user, function (err) {
            if(err)
                return next(err);
            return res.send({message:'User Signed in'});
        });
    })(req, res, next);
});

router.get('/registration', function (req, res) {
    res.render('userRegistration', {_csrf: req.csrfToken(), message:req.query.message});
});

router.post('/register', function (req, res, next) {
    var rBody = req.body;

    if(rBody.userPass != rBody.passCheck){
        res.redirect('/registration?message=Password+Mismatch');
        return;
    }
    else if(!rBody.userEmail || !rBody.userFirstName || !rBody.userLastName || !rBody.userPhone){
        res.redirect('/registration?message=Missing+required+Fields');
        return;
    }
    else {
        passport.authenticate('local-signup', function(err, info) {
            if (err)
                return next(err);

            res.redirect('/?message=New+User+Created');

        })(req, res, next);

    }
});

module.exports = router;
