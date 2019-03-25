// import {Injectable} from '@angular/core'

// import {Observable} from 'rxjs/Rx';


var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var cors = require('cors');
app.use(cors());
// Connection string parameters.
var sqlConfig = {
    user: 'sa',
    password: 'password@123',
    server: 'MAHD0076',
    database: 'test'
}

app.get('/users', function (req, res) {
    var  dbConn  =  new  sql.ConnectionPool(sqlConfig);
    dbConn.connect().then(function  () {
        var  request  =  new  sql.Request(dbConn);
        // query to the database
        request.query('select * from Users').then(function  (recordset) {
            res.send(recordset);
            dbConn.close();
        }).catch(function  (err) {
            console.log("Error in excuting query "  +  err);
            res.send(err);
            dbConn.close();
        });
    }).catch(function  (err) {
        console.log("Error while connecting database :- "  +  err);
        res.send(err);
        dbConn.close();
    });
})


// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});





