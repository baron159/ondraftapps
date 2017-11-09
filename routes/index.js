'use strict';

var express = require('express');
var router = express.Router();
var firebase = require('firebase');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.user);
    console.log(process.env.ENV_VARIABLE);
    res.render('sign-in', {_csrf: req.csrfToken(), message:req.query.message});
});

router.post('/sign-in', function (req, res, next) {
    console.log(req.body);
    firebase.auth().signInWithEmailAndPassword(req.body.userEmail, req.body.userPass)
        .then(function () {
            return res.redirect('/dashboard/main');
        })
        .catch(function (error) {
            console.error(error);
            return res.redirect('/?message=User+Information+not+correct');
        });
});

router.get('/log-out', function (req, res) {
    firebase.auth().signOut();
    res.statusCode = 200;
    res.redirect('/?message=User+has+been+logged+out+of+the+system');
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
        firebase.auth().createUserWithEmailAndPassword(req.body.userEmail, req.body.userPass)
            .then(function () {
                var user = firebase.auth().currentUser;
                user.updatePhoneNumber(req.body.userPhone)
                    .then(function () {
                        var userName = req.body.userLastName + ", " + req.body.userFirst;
                        user.updateProfile({
                            displayName: userName,
                            photoURL: null
                        })
                            .then(function () {
                                res.redirect('/?message=New+User+Created');
                            })
                            .catch(function (error) {
                                console.error(error);
                            })
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
            .catch(function (error) {
                res.redirect('/?message=Error+Please+Try+Again');
                console.error(error);
            });
    }
});

function isLoggedIn(req, res, next) {
    var user = firebase.auth().currentUser;
    // if user is authenticated in the session, carry on
    if (user) {
        console.info('INDEX LOGGED IN CHECK PASS: ' + user.uid + " is the ID of the current User");
        return next();
    }
    console.log('is not logged in');

    // if they aren't redirect them to the home page
    res.redirect('/services/userSignInController/log-in');
}

module.exports = router;
