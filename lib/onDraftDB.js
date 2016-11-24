/**
 * Created by scottbaron on 11/23/16.
 */

var pg = require('pg');

var config = {
    user: 'draftmaster', //env var: PGUSER
    database: 'ondraftappdb', //env var: PGDATABASE
    password: 'draftB33r', //env var: PGPASSWORD
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};

var draftDBPool = new pg.Pool(config);

module.export = draftDBPool;