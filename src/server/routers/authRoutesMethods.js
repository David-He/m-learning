let OAuthUserModel = require("../dbHelpers/userModel");

module.exports = {
    registerUser: registerUser,
}

function registerUser(req, res){
    console.log(`authRoutesMethods: registerUser: req.body is:`, req.body);

    OAuthUserModel.findOne(
        {phoneNum: req.body.phoneNum},
        (err, user)=>{
            if (err) {
                console.log(err);
                return err;
            }
            if (! user){
                let oAuthUser = new OAuthUserModel({
                    phoneNum: req.body.phoneNum,
                    password: req.body.password,
                    name: req.body.userName,
                });
                oAuthUser.save((err, data)=>{
                    sendResponse(res, data, err)
                });
            }
        }
    )
}



function sendResponse(res, message, error) {

    res
    .status(error !== null ? error !== null ? 400 : 200 : 400)
    .json({
         'message': message,
         'error': error,
    })
}

