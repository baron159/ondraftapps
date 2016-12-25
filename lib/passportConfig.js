/**
 * Created by scottbaron on 10/28/16.
 */

'use strict';
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');



//This method will hopefully return a signed in in user
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        console.log(user.userID + " was seralized");
        done(null, user.userID);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        console.log(id + " is deserialized");
        User.findByID(id, function (err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'userEmail',
            passwordField: 'userPass',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, userName, password, done) {

            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function (callback) {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne(userName, function (err, isAvailable, user) {
                    //console.log('userfound: ' + isNotAvailable);
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
                    // check to see if theres already a user with that email
                    if (!isAvailable) {
                        console.log(user.email +' is not available');
                        return done(null, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        console.log('new local user');

                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.userEmail = req.body.userEmail;
                        newUser.userFirstName = req.body.userFirstName;
                        newUser.userLastName = req.body.userLastName;
                        // newUser.password = req.body.password;
                        newUser.userPhone = req.body.userPhone;
                        //newUser.photo = 'http://www.flippersmack.com/wp-content/uploads/2011/08/Scuba-diving.jpg';

                         User.save(newUser, req.body['userPass'], function (err) {
                             if (err) {
                                 console.log("Err while saving user: ", err);
                                 return done(err);
                             }
                             return done(false);
                         });
                    }

                });

            });

        }));


    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'userEmail',
            passwordField: 'userPass',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, userName, password, done) { // callback with email and password from our form
            console.log('UserName: ' + userName, ' password: ' + password);
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne(userName, function (err, isAvailable, user) {
                // if there are any errors, return the error before anything else
                if (err) {
                    console.log("ERR HIT");
                    return done(err);
                }
                // if no user is found, return the message
                if (!user){
                    console.log("NO USER FOUND");
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }
                // if the user is found but the password is wrong
                if (!User.validatePassword(user, password)) {
                    console.log("PASSWORD NOT VALID");
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                }
                // all is well, return successful user
                console.log("User found and authenticated");
                return done(null, user);
            });

        }));
};
