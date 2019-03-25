// Common JS is for related databse base objects

// MS Sql Server client
var sql = require('mssql/msnodesqlv8');

// SQL Server Configuration
var sqlConfig = {
    server: 'MAHD0076',
    database: 'test',
    user: 'sa', 
    password: 'password@123',
};

module.exports = {

    //Function to connect to database and execute query
    executeQuery: function (query, res) {
        var dbConn = new sql.ConnectionPool(sqlConfig);
        dbConn.connect().then(function () {
            var request = new sql.Request(dbConn);
            // query to the database
            request.query(query).then(function (recordset) {
                res.send(recordset);
                dbConn.close();
            }).catch(function (err) {
                console.log("Error in excuting query " + err);
                res.send(err);
                dbConn.close();
            });
        }).catch(function (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
            dbConn.close();
        });
    },

    //Function to connect to database and Execute zero parameter stored procedure 
    ExecuteStoredProc :function (procName, res) {
        var dbConn = new sql.ConnectionPool(sqlConfig);
        dbConn.connect().then(function () {
            var request = new sql.Request(dbConn);
            // query to the database
            request.execute(procName).then(function (recordset) {
                res.send(recordset);
                dbConn.close();
            }).catch(function (err) {
                console.log("Error in excuting Stored procedure " + err);
                res.send(err);
                dbConn.close();
            });
        }).catch(function (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
            dbConn.close();
        });
    },

    //Function to connect to database and Execute  parameterized stored procedure 
    ExecuteStoredProcWithParms :function (procName,parms, res) {
        var dbConn = new sql.ConnectionPool(sqlConfig);
        dbConn.connect().then(function () {
            var request = new sql.Request(dbConn);
            // add input parameters to request object
            for (var i = 0; i < parms.length; i++) {
               request.input(parms[i].key, parms[i].datatype, parms[i].value)
            }
            // query to the database
            request.execute(procName).then(function (recordset) {
                res.send(recordset);
                dbConn.close();
            }).catch(function (err) {
                console.log("Error in excuting Stored procedure " + err);
                res.send(err);
                dbConn.close();
            });
        }).catch(function (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
            dbConn.close();
        });
    },

    //Function to connect to database and insert query with transactions
    InsertRowTran: function (query, res) {
        var dbConn = new sql.ConnectionPool(sqlConfig);
        dbConn.connect().then(function () {
            var transaction = new sql.Transaction(dbConn);
            transaction.begin().then(function () {
                // create Request object
                var request = new sql.Request(transaction);
                request.query(query)
                    .then(function () {
                        transaction.commit().then(function (recordSet) {
                            res.send(recordset);
                            dbConn.close();
                        }).catch(function (err) {
                            console.log("Error in Transaction Commit " + err);
                            dbConn.close();
                            res.send(err);
                        });
                    }).catch(function (err) {
                        console.log("Error in execute query " + err);
                        dbConn.close();
                        res.send(err);
                    });

            }).catch(function (err) {
                console.log("Error in Transaction Begin " + err);
                dbConn.close();
                res.send(err);
            });
        }).catch(function (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        });
    },

    //Function to connect to database and execute query
    executeQueryTest: function (query, res) {
        sql.close();
        sql.connect(sqlConfig, function (err) {
            if (err) {
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                var request = new sql.Request();
                // query to the database
                request.query(query, function (err, recordset) {
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        res.send(err);
                    }
                    else {
                        res.send(recordset);
                    }
                });
            }
        });
    },

}
