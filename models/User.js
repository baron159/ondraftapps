/**
 * Created by scottbaron on 11/24/16.
 */
'use strict';

var draftDB = require('../lib/onDraftDB');

var rawUserFetchQuery = 'SELECT * FROM user_table WHERE user_email=$1::text;';
var rawUserGetByIDQuery = 'SELECT * FROM user_table WHERE user_id=$1::int;';

function User() {
    this.userID = 0;
    this.userFirstName = '';
    this.userLastName = '';
    this.userEmail = '';
    this.userPhone = '';
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
    if(user.password === password){
        return true;
    }
    else{
        return false;
    }
};

module.exports = User;