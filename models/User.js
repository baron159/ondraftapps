/**
 * Created by scottbaron on 11/24/16.
 */
'use strict';

var bcrypt = require('bcrypt');
const saltRounds = 10;

var draftDB = require('../lib/onDraftDB');

var rawUserFetchQuery = 'SELECT * FROM user_table WHERE user_email=$1::text;';
var rawUserGetByIDQuery = 'SELECT * FROM user_table WHERE user_id=$1::int;';
var rawUserCreationQuery = 'INSERT INTO user_table VALUES (DEFAULT, $1::text, $2::text, $3::text, $4::text, $5::text);';


function User() {
    this.userID = 0;
    this.userFirstName = '';
    this.userLastName = '';
    this.userEmail = '';
    this.userPhone = '';
    this.userPass = '';
}

User.findOne = function (email, callback) {
    var isAvailable = false;
    var onDraftUser = new User();
    // THE CALLBACK HAS THIS STRUCTURE callback(error, isAvailable, user)
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            console.error('ERROR Connecting to DB');
            console.error(err);
            return callback(err, null);
        }
        else{
            client.query(rawUserFetchQuery, [email], function (err, result) {
                if(err){
                    console.error(err);
                    return callback(err, false, this);
                }
                else if(result.rows.length > 0){
                    var userData = result.rows[0];
                    onDraftUser.userID = userData['user_id'];
                    onDraftUser.userEmail = userData['user_email'];
                    onDraftUser.userFirstName = userData['first_name'];
                    onDraftUser.userLastName = userData['last_name'];
                    onDraftUser.userPhone = userData['phone_number'];
                    onDraftUser.userPass = userData['user_password'];
                    done();
                    return callback(false, false, onDraftUser);
                }
                else{
                    console.log('User Not Found and is Availiable');
                    done();
                    return callback(false, true, this);
                }
            });
        }
    })
};

User.save = function(user, plainTextPassword, callback){
    console.log(plainTextPassword);
    bcrypt.hash(plainTextPassword, saltRounds, function (err, hash) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.send({message: 'Error Salting and Hashing Password'});
        }
        else {
            draftDB.draftDB.connect(function (err, client, done) {
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
                        [user.userFirstName, user.userLastName, user.userPhone, user.userEmail, hash],
                        function (err, result) {
                            if(err){
                                console.log(err);
                            }
                            done();
                        }
                    )
                }
            });
        }
        callback(err);
    });
};

//  This Callback is a little different this call back is (err, user)
User.findByID = function (id, callback) {
    var onDraftUser = new User();
    draftDB.draftDB.connect(function (err, client, done) {
        if(err){
            return callback(err, this);
        }
        else{
            client.query(rawUserGetByIDQuery, [id], function (err, result) {
                if(err){
                    done();
                    return callback(err, this);
                }
                else if(result.rows.length > 0){
                    var userData = result.rows[0];
                    onDraftUser.userID = userData['user_id'];
                    onDraftUser.userEmail = userData['user_email'];
                    onDraftUser.userFirstName = userData['first_name'];
                    onDraftUser.userLastName = userData['last_name'];
                    onDraftUser.userPhone = userData['phone_number'];
                    onDraftUser.userPass = userData['user_password'];
                    done();
                    return callback(false, onDraftUser);
                }
                else{
                    console.log('Sesson could not find the User');
                    done();
                    return callback(false, this);
                }
            })
        }
    })
};

User.validatePassword = function(user, password){
    return bcrypt.compareSync(password, user.userPass);
};

module.exports = User;