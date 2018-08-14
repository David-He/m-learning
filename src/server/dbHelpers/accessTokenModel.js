let mongoose = require("./db");

let schema = mongoose.Schema;

let oauthTokenSchema = new schema({
    accessToken: { type: String },
    accessTokenExpiresOn: { type: Date },
    client : { type: Object },  // `client` and `user` are required in multiple places, for example `getAccessToken()`
    clientId: { type: String },
    refreshToken: { type: String },
    refreshTokenExpiresOn: { type: Date },
    user : { type: Object },
    userId: { type: String },
});

module.exports = mongoose.model('OAuthTokens', oauthTokenSchema);
