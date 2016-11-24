var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var onDraftDB = require('../lib/onDraftDB');

const saltRounds = 10;

var rawUserCreationQuery = 'INSERT INTO user_table VALUES (DEFAULT, $1::text, $2::text, $3::text, $4::text, $5::text);';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-in', {_csrf: req.csrfToken(), message:req.query.message});
});

router.post('/sign-in', function (req, res, next) {

});

router.get('/registration', function (req, res) {
    res.render('userRegistration', {_csrf: req.csrfToken(), message:req.query.message});
});

router.post('/register', function (req, res) {
    var rBody = req.body;

    if(rBody.userPass != rBody.passCheck){
        res.redirect('/registration?message=Password+Mismatch');
        return;
    }
    else if(!rBody.userEmail || !rBody.userFirstName || !rBody.userLastName || !rBody.userPhoneNumber){
        res.redirect('/registration?message=Missing+required+Fields');
        return;
    }
    else {

        bcrypt.hash(req.body.userPass, saltRounds, function (err, hash) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.send({message: 'Error Salting and Hashing Password'});
            }
            else {
                onDraftDB.draftDB.connect(function (err, client, done) {
                    console.log("Connection Made");
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        res.send({message: 'No available DB pool Please try again later'});
                    }
                    else {
                        console.log("Inside Else with hash: " + hash);
                        client.query(
                            rawUserCreationQuery,
                            [rBody.userFirstName, rBody.userLastName, rBody.userPhoneNumber, rBody.userEmail, hash],
                            function (err, result) {
                                done();
                                console.log("Query Sent");
                                if (err) {
                                    console.error(err);
                                    res.statusCode = 501;
                                    res.send({message: 'Error with Database'});
                                }
                                else {
                                    console.log("User Created");
                                    res.redirect('/?message=User+Created,+please+Sign+in');
                                }
                            }
                        )
                    }
                });
            }
        });
    }
});

module.exports = router;
