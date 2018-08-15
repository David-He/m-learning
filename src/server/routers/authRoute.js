let authRoutesMethods = require("./authRoutesMethods");

module.exports = (router) =>{
    router.post('/registerUser',  authRoutesMethods.registerUser);

    return router;
    
}