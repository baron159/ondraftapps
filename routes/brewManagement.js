/**
 * Created by scottbaron on 12/31/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var draftDB = require('../lib/onDraftDB');

var rawFetchBrewQuery = 'SELECT * FROM brew_table WHERE user_id=$1::int;';
var rawBrewIDFetchQuery = 'SELECT brewery_id FROM brewery_table WHERE user_id=$1::int LIMIT 1;';
var rawBrewCreationQuery = 'INSERT INTO brew_table VALUES(DEFAULT, $1::int, $2::int, $3::text, $4::text, $5::text, $6::text, $7::text, $8::bool, $9::text, $10::text);';
var rawSingleBrewQuery = 'SELECT * FROM brew_table WHERE brew_id=$1::int AND user_id=$2::int LIMIT 1;';
var rawSingleBrewUpdate = 'UPDATE brew_table SET brew_name=$1::text, brew_style=$2::text, brew_abv=$3::text, brew_ibu=$4::text, brew_summary=$5::text, brew_avaliable_now=$6::bool, brew_avaliable_start=$7::text, brew_avaliable_end=$8::text WHERE brew_id=$9::int AND user_id=$10::int;';

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
                    res.render('dashboardBrewView', {_csrf:req.csrfToken(), userBrews: result.rows, message: req.query['message']});
                }
            })
        }
    });
});

router.post('/create-brew', isLoggedIn, function (req, res) {
    console.log(req.body);
    var breweryID = null;
    var brewAvaFlag = null;
    // We must first get the Brewery ID for the user that is using the system
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            console.error('ERROR - Unable to retrieve a Client');
            res.statusCode = 501;
            res.redirect('/dashboard/main?message=Brew+Service+is+unavailable+at+this+time');
        }
        else{
            client.query(rawBrewIDFetchQuery, [req.user['userID']], function (err, results) {
                if(err){
                    console.error('ERROR - Query Error');
                    res.statusCode = 501;
                    res.redirect('/dashboard/main?message=Brew+Service+is+unavailable+at+this+time');
                }
                else{
                    breweryID = results.rows[0]['brewery_id'];
                    if(req.body['brewAvaNow'] == 'on'){
                        brewAvaFlag = true;
                    }
                    else{
                        brewAvaFlag = false;
                    }

                    console.log(brewAvaFlag);
                    console.log('Brewery ID That was found: ' + breweryID);

                    client.query(rawBrewCreationQuery,
                        [req.user['userID'], breweryID, req.body['brewName'], req.body['brewStyle'], req.body['brewAbv'], req.body['brewIbu'], req.body['brewSum'], brewAvaFlag, req.body['brewAvaStartDate'], req.body['brewAvaEndDate']],
                        function (err, result) {
                        done();
                            if(err){
                                console.error('ERROR - Query Error');
                                console.error(err);
                                res.statusCode = 501;
                                res.redirect('/dashboard/main?message=Brew+Service+is+unavailable+at+this+time');
                            }
                            else{
                                console.log('Brew Created - Now redirecting to refresh the page.');
                                res.statusCode = 300;
                                res.redirect('/dashboard/brew-page?message=Brew+created');
                            }
                        });
                }

            });
        }
    });

});

router.get('/edit-brew', isLoggedIn, function (req, res) {
    console.log(req.query);
    draftDB.draftDB.connect(function(err, client, done){
        if(err){
            console.error('ERROR - Unable to retrieve a Client');
            res.statusCode = 501;
            res.redirect('/dashboard/brew-page?message=Brew+Update+Service+is+unavailable+at+this+time');
        }
        else{
            client.query(rawSingleBrewQuery, [req.query['brew_selected'], req.user['userID']], function (err, result) {
                if(err){
                    console.error('ERROR - Query Error');
                    console.error(err);
                    res.statusCode = 501;
                    res.redirect('/dashboard/brew-page?message=Brew+Update+Service+is+unavailable+at+this+time');
                }
                else{
                    console.log(result.rows);
                    res.render('dashboardBrewEditView', {_csrf:req.csrfToken(), brew: result.rows[0], message: req.query['message']})
                }
            })
        }
    });
});

router.post('/update-brew', isLoggedIn, function (req, res) {
    console.log(req.body);
    draftDB.draftDB.connect(function(err, client, done){
        if(err){
            console.error('ERROR - Unable to retrieve a Client');
            res.statusCode = 501;
            res.redirect('/dashboard/brew-page?message=Brew+Update+Service+is+unavailable+at+this+time');
        }
        else{
            var brewAvaFlag = null;

            if(req.body['brewAvaNow'] == 'on'){
                brewAvaFlag = true;
            }
            else{
                brewAvaFlag = false;
            }

            client.query(rawSingleBrewUpdate,
                [req.body['brewName'], req.body['brewStyle'], req.body['brewAbv'], req.body['brewIbu'], req.body['brewSum'], brewAvaFlag, req.body['brewAvaStartDate'], req.body['brewAvaEndDate'], req.body['brewId'], req.user['userID']],
                function (err, result) {
                    if(err){
                        console.error('ERROR - Query Error');
                        console.error(err);
                        res.statusCode = 501;
                        res.redirect('/dashboard/edit-brew?message=Brew+Update+Service+is+unavailable+at+this+time&brew='+req.body['brewId']);
                    }
                    else{
                        res.statusCode = 300;
                        res.redirect('/dashboard/brew-page?message=Brew+Updated');
                    }
                }
            )
        }
    });
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
