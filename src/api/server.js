var express = require('express');
var app = express();
var bodyParser = require('body-parser');

 // used to create, sign, and verify tokens
// var jwt    = require('jsonwebtoken');

// For Logging
// var winston = require('winston');

//  get our config file
var config = require('./config'); 

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('superSecret', config.secret);
var router = express.Router();

//Setting up server
var server = app.listen(process.env.PORT || 8081, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// For logging Setup
// var logger = new (winston.Logger)({
//     transports: [
//         new (winston.transports.File)({
//             name: 'info-file',
//             filename: 'filelog-info.log',
//             level: 'info',
//         }),
//         new (winston.transports.File)({
//           name: 'error-file',
//           filename: 'filelog-error.log',
//           level: 'error'
//         })
//     ]
// });

// route to authenticate a user
router.post("/authenticate", function (req, res) {
    // check user credentials in DB 
    //  TODO 
    // var token = jwt.sign({
    //     data: 'Ravi' // It should be user details.
    //   }, app.get('superSecret'),{ expiresIn: '1hr'},{algorithms:'HS256' });
    // res.json({
    //     success: true,
    //     message: 'Enjoy your token!',
    //     token: token
    // });
});

// We can do validations to make sure that everything coming from a request is safe and sound. 
// We can throw errors here in case something is wrong. 
// We can do some extra logging for analytics or any statistics we'd like to keep. 
router.use(function (req, res, next) {

    //CORS Middleware
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");

    logger.error("error:"+req.originalUrl);
    // to verify the POST method having body object or not
    if (req.method == 'POST') {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            console.log('request body not found');
            return res.sendStatus(400);
        }
    }

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log(req.headers['authorization']);
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
    // do logging using req and res objests.
    console.log(req.originalUrl);
   //next(); // make sure we go to the next routes and don't stop here
});

// It contains all APIs
require('./index')(router);

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);
