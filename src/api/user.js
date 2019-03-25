const DBCommon = require('./DBCommon.js');

module.exports = function (router) {
    router.get("/users", function (req, res) {
        var query = "select * from [User]";
        DBCommon.executeQuery(query, res);
    });

    router.get("/usersproc", function (req, res) {
        var procName = "GetAllusers";
        DBCommon.ExecuteStoredProc(procName, res);
    });

    // sample input data
    // [
    //     {
    //        "key": "ID",
    //        "value": "1",
    //        "datatype": "sql.Int"
    //     }
    //  ]
    router.post("/usersprocinput", function (req, res) {
        DBCommon.ExecuteStoredProcWithParms("GetAlluserByID", req.body, res);
    });

    router.get('/users/:userId/', function (req, res) {
        var query = 'select * from [User] where ID = ' + req.params.userId;
        DBCommon.executeQuery(query, res);
    });

    //  multiple params sample 
    router.get('/users/:userId/:userId1', function (req, res) {
        console.log(req.params.userId); 
        console.log(req.params.userId1); 
        res.send("Sucess");
    });

    //query string sample
    router.get('/usersquery/', function (req, res) {
        console.log(req.query.page); 
        console.log(req.query.limit); 
        res.send("Sucess");
    });
}