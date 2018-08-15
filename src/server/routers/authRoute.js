let authRoutesMethods = require("./authRoutesMethods");

module.exports = (router, expressApp) =>{
    router.post('/registerUser',  authRoutesMethods.registerUser);
    router.post('/login', 
        expressApp.oauth.token()
        //authRoutesMethods.login
    )
    return router;
    
}