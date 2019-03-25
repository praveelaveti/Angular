const userRoutes = require('./user');

module.exports = function(router)
{
    //Base API
    router.get('/', function (req, res) {
        res.send("Welcome to PCDB services!");
    });
    // user APIs
    userRoutes(router);
}