/**
 * Created by scottbaron on 12/25/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var firebase = require('firebase');

router.get('/account-info', isLoggedIn, function (req, res) {
    console.log(req.user);
    res.statusCode = 200;
    res.render('dashboardAccountPage', {
        _csrf: req.csrfToken(),
        error: req.query['error'],
        message: req.query['message'],
        userEmail: req.user['userEmail'],
        userFirst: req.user['userFirstName'],
        userLast: req.user['userLastName'],
        userPhone: req.user['userPhone']
    })
});

router.post('/update-account', isLoggedIn, function(req, res) {
    console.log(req.body);
    res.redirect('/dashboard/account-info?message=Feature+Currently+Disabled');
});

router.post('/password-update', isLoggedIn, function (req, res) {
    console.log(req.body);
    if(req.body['userPass'] === req.body['passCheck']){
        firebase.auth().currentUser.updatePassword(req.body.userPass)
            .then(function (t) {
                console.log(t);
                res.redirect('/dashboard/account-info?message=Password+has+been+updated&error=false');
            })
            .catch(function (error) {
                console.error(error);
                res.redirect('/dashboard/account-info?message=' + error + '&error=true');
            })
    }
    else{
        console.log('INFO - Passwords Do Not Match');
        res.statusCode=400;
        res.redirect('/dashboard/account-info?message=No+chage+has+been+made&error=true');
    }
});

function isLoggedIn(req, res, next) {
    var user = firebase.auth().currentUser;
    // if user is authenticated in the session, carry on
    if (user) {
        console.log('ACCOUNT MANAGEMENT PASS: ' + user.uid + " UID of current user");
        console.log(req.user);
        return next();
    }
    console.log('is not logged in');

    // if they aren't redirect them to the home page
    res.redirect('/?message=Please+Sign+In');
}

module.exports = router;