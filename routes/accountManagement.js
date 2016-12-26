/**
 * Created by scottbaron on 12/25/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var draftDB = require('../lib/onDraftDB');
var bcrypt = require('bcrypt');
const saltRounds = 10;


var rawAccountInfoUpdate = 'UPDATE user_table SET first_name=$1::text, last_name=$2::text, phone_number=$3::text WHERE user_id=$4::int;';
var rawPasswordUpdate = 'UPDATE user_table SET user_password=$1::text WHERE user_id=$2::int;';

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
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            console.error(err);
            res.statusCode = 500;
            res.redirect('/dashboard/account-info?message=Account+Update+Service+is+not+available+at+this+time');
        }
        else{
            client.query(rawAccountInfoUpdate, [
                req.body['userFirstName'],
                req.body['userLastName'],
                req.body['userPhone'],
                req.user['userID']
            ], function (err, results) {
                if(err){
                    console.error('ERROR - Problem with Query');
                    console.error(err);
                    res.statusCode = 501;
                    res.redirect('/dashboard/account-info?message=Account+Update+Service+is+not+available+at+this+time');
                }
                else{
                    res.statusCode = 300;
                    res.redirect('/dashboard/account-info?message=Account+Updated');
                }
            })
        }
    })
});

router.post('/password-update', isLoggedIn, function (req, res) {
    console.log(req.body);
    if(req.body['userPass'] === req.body['passCheck']){
        bcrypt.hash(req.body['userPass'], saltRounds, function (err, hash){
            if(err){
                console.error(err);
                res.statusCode= 505;
                res.redirect('/dashboard/account-info?message=Password+change+service+not+secure+at+this+time+NO+CHANGE+HAS+BEEN+MADE');
            }
            else{
                draftDB.draftDB.connect(function (err, client, done) {
                    if(err){
                        console.error(err);
                        res.statusCode= 500;
                        res.redirect('/dashboard/account-info?message=Password+change+service+not+available+at+this+time+NO+CHANGE+HAS+BEEN+MADE');
                    }
                    else{
                        client.query(rawPasswordUpdate, [hash, req.user['userID']], function (err, results) {
                            done();
                            if(err){
                                console.error(err);
                                res.statusCode= 500;
                                res.redirect('/dashboard/account-info?message=Password+change+service+not+available+at+this+time+NO+CHANGE+HAS+BEEN+MADE');
                            }
                            else{
                                res.statusCode = 300;
                                res.redirect('/dashboard/account-info?message=Password+has+been+changed.');
                            }
                        })
                    }
                })
            }
        });
    }
    else{
        console.log('INFO - Passwords Do Not Match');
        res.statusCode=400;
        res.redirect('/dashboard/account-info?message=No+chage+has+been+made&error=true');
    }
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        console.log('is Logged in');
        return next();
    }
    console.log('is not logged in');

    // if they aren't redirect them to the home page
    res.redirect('/?message=Please+Sign+In');
}

module.exports = router;