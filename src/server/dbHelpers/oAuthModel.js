let OAuthUser = require("./userModel");
let OAuthClient = require("./clientModel");
let OAuthTokenModel = require("./accessTokenModel");



let getAccessToken = function(bearerToken){
    return OAuthTokenModel.findOne({accessToken: bearerToken}).lean();
};

let getClient = function(clientId, clientSecret){
    // return OAuthClient.findOne({
    //     clientId: clientId,
    //     clientSecret: clientSecret
    // }).lean();
    return {
        id: clientId,
        //clientSecret: clientSecret
        grants: ["password"],
    }
};

let getRefreshToken = function(refreshToken){
    return OAuthTokenModel.findOne({refreshToken: refreshToken}).lean();
}

let getUser = function(phoneNum, password){
    return OAuthUser.findOne({phoneNum: phoneNum, 
        password: password}).lean();
}

let saveToken = function(token, client, user){
    var accessToken = new OAuthTokenModel(
        {accessToken: token.accessToken,
        accessTokenExpiresOn: token.accessTokenExpiresOn,
        client: client,
        clientId: client.clientId,
        refreshToken: token.refreshToken,
        refreshTokenExpiresOn: token.refreshTokenExpiresOn,
        user: user,
        userId: user._id,
    })

    return new Promise((resolve, reject) => {
        accessToken.save((err, data) =>{
            if (err) reject(err);
            else resolve(data);
        })
    }).then((saveResult) => {
        saveResult = saveResult && typeof(saveResult) == 'object'? saveResult.toJSON(): saveResult;
        let data = new Object();
        for(var prop in saveResult) data[prop] = saveResult[prop];

        data.client = data.clientId;
        data.user = data.userId;
        
        return data;
    })
}

module.exports = {
    getAccessToken: getAccessToken,
    getClient: getClient,
    getRefreshToken: getRefreshToken,

    getUser: getUser,
    saveToken: saveToken
}