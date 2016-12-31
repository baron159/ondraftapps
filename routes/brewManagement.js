/**
 * Created by scottbaron on 12/31/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var draftDB = require('../lib/onDraftDB');

var rawFetchBrewQuery = 'SELECT * FROM brew_table WHERE user_id=$1::int;';

router.get('/brew-page', isLoggedIn, function (req, res) {
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            console.error('ERROR - Unable to retrieve a Client');
            res.statusCode = 501;
            res.redirect('/dashboard/main?message=Brew+Service+is+unavailable+at+this+time');
        }
        else{
            console.log('User: ' + req.user['userID'] + ' is loading the Brew Page');
            client.query(rawFetchBrewQuery, [req.user['userID']], function (err, result) {
                done();
                if(err){
                    console.error('ERROR - Query Error');
                    res.statusCode = 501;
                    res.redirect('/dashboard/main?message=Brew+Service+is+unavailable+at+this+time');
                }
                else{
                    res.statusCode = 200;
                    res.render('dashboardBrewView', {_csrf:req.csrfToken(), userBrews: result.rows});
                }
            })
        }
    });
});

router.post('/create-brew', isLoggedIn, function (req, res) {
    console.log(req.body);
    res.statusCode = 300;
    res.send({message:'Data receved'});
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
