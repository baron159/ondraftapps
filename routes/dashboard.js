/**
 * Created by scottbaron on 12/24/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var draftDB = require('../lib/onDraftDB');

//TODO create a check for signed in user to protect the route
router.get('/main', function (req, res) {
    res.render('mainDashboard', {});
});

router.get('/brewery-info', function (req, res) {
    res.render('dashboardBreweryView', {});
});

module.exports = router;
