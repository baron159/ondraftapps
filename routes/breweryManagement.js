/**
 * Created by scottbaron on 12/24/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var draftDB = require('../lib/onDraftDB');

var queryDB = require('pg-promise');

var rawBreweryInfoFetch = 'SELECT * FROM brewery_table WHERE user_id=$1::int LIMIT 1;';
var rawBreweryCreationQuery = 'INSERT INTO brewery_table VALUES(' +
    'DEFAULT, $1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::text, $10::text,' +
    ' $11::text, $12::text, $13::text, $14::text, $15::text, $16::text, $17::text, $18::text' +
    ');';

var rawBreweryUpdateQuery = 'UPDATE brewery_table SET ' +
    'brewery_summary=$1::text, brewery_amenities=$2::text, brewery_address_1=$3::text, brewery_address_2=$4::text, ' +
    'brewery_city=$5::text, brewery_state=$6::text, brewery_zip=$7::text, brewery_lat=$8::text, brewery_long=$9::text, ' +
    'brewery_monday=$10::text, brewery_tuesday=$11::text, brewery_wednesday=$12::text, brewery_thursday=$13::text, ' +
    'brewery_friday=$14::text, brewery_saturday=$15::text, brewery_sunday=$16::text, brewery_name=$17::text ' +
    'WHERE user_id=$18::int AND brewery_id=$19::int;';

router.get('/main', isLoggedIn, function (req, res) {
    res.render('mainDashboard', {message: req.query['message']});
});

router.get('/brewery-info', isLoggedIn, function (req, res) {
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            console.error('ERROR - Unable to retrieve a client');
            res.statusCode = 501;
            res.redirect('/dashboard/main?message=Brewery+Profile+Service+is+unavailable+at+this+time');
        }
        else {
            console.log("User ID:" + req.user['userID'] + " trying to retrieve Brewery Data");
            client.query(rawBreweryInfoFetch, [req.user['userID']], function (err, result) {
                done();
                if(err){
                    console.error('ERROR - Query Error');
                    res.statusCode = 501;
                    res.redirect('/dashboard/main?message=Brewery+Profile+Service+is+unavailable+at+this+time');
                }
                else {
                    if(result.rows.length === 1){
                        res.statusCode = 201;
                        var renderData = result.rows[0];
                        renderData['_csrf'] = req.csrfToken();
                        renderData['freshFlag'] = 'false';
                        renderData['message'] = req.query['message'];
                        console.log(renderData);
                        res.render('dashboardBreweryView', renderData);
                    }
                    else{
                        res.statusCode = 200;
                        res.render('dashboardBreweryView', {_csrf: req.csrfToken(), freshFlag:'true', message: req.query['message']});
                    }
                }
            });
        }
    });

});

router.post('/brewery-update', isLoggedIn, function (req, res) {
    console.log(req.body);
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            console.error('ERROR - Unable to get a client');
            res.statusCode = 501;
            res.redirect('/dashboard/brewery-info?message=Brewery+Profile+Update+Service+is+unavailable+at+this+time');
        }
        else{
            if(req.body['freshUpdate'] == 'true') {
                client.query(rawBreweryCreationQuery, [
                    req.user['userID'],
                    req.body['brewerySum'],
                    req.body['breweryFeatures'],
                    req.body['breweryAddress1'],
                    req.body['breweryAddress2'],
                    req.body['breweryCity'],
                    req.body['breweryState'],
                    req.body['breweryZip'],
                    '0.0', //req.body[''], TODO: Implement a lat Look up for the given address
                    '0.0', //req.body[''], TODO: Implement a long look up for the given address
                    req.body['breweryMonday'],
                    req.body['breweryTuesday'],
                    req.body['breweryWednesday'],
                    req.body['breweryThursday'],
                    req.body['breweryFriday'],
                    req.body['brewerySaturday'],
                    req.body['brewerySunday'],
                    req.body['breweryName']
                ], function (err, results) {
                    done();
                    if (err) {
                        console.error('ERROR - Problem with query');
                        console.error(err);
                        console.error(results);
                        res.statusCode = 501;
                        res.redirect('/dashboard/brewery-info?message=Brewery+Profile+Update+Service+is+unavailable+at+this+time');
                    }
                    else {
                        res.statusCode = 300;
                        res.redirect('/dashboard/brewery-info?message=Brewery+Info+Updated');
                    }
                })
            }
            else {
                client.query(rawBreweryUpdateQuery, [
                    req.body['brewerySum'],
                    req.body['breweryFeatures'],
                    req.body['breweryAddress1'],
                    req.body['breweryAddress2'],
                    req.body['breweryCity'],
                    req.body['breweryState'],
                    req.body['breweryZip'],
                    '0.0', //req.body[''], TODO: Implement a lat Look up for the given address
                    '0.0', //req.body[''], TODO: Implement a long look up for the given address
                    req.body['breweryMonday'],
                    req.body['breweryTuesday'],
                    req.body['breweryWednesday'],
                    req.body['breweryThursday'],
                    req.body['breweryFriday'],
                    req.body['brewerySaturday'],
                    req.body['brewerySunday'],
                    req.body['breweryName'],
                    req.user['userID'],
                    parseInt(req.body['breweryId'])
                ], function (err, result) {
                    done();
                    if (err) {
                        console.error('ERROR - Problem with query');
                        console.error(err);
                        res.statusCode = 501;
                        res.redirect('/dashboard/brewery-info?message=Brewery+Profile+Update+Service+is+unavailable+at+this+time');
                    }
                    else {
                        res.statusCode = 300;
                        res.redirect('/dashboard/brewery-info?message=Brewery+Info+Updated');
                    }
                })
            }
        }
    })
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
