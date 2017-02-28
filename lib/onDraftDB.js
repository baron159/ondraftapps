/**
 * Created by scottbaron on 11/23/16.
 */
'use strict';
var pg = require('pg').Pool;

var draftDBPool = new pg({
    user: 'draftmaster',
    // user: process.env.DB_USER,
    database: 'ondraftappdb',
    // database: process.env.DB_NAME,
    password: 'draftB33r',
    // password: process.env.DB_PASS,
    // host: process.env.DB_HOST,
    host: 'ondraftappdb.cc3tpubyruld.us-east-1.rds.amazonaws.com',
    port: '5432', //env var: PGPORT
    max: 10, // max number of clients in the pool
    min: 5,
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
});

draftDBPool.on('error', function (err, client) {
    console.log('Idle client error' + err.message);
});

// var draftDBPool = new pg.Pool(config);

module.exports = {
    draftDB : draftDBPool
};