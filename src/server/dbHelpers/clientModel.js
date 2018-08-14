let mongoose = require("./db");

let schema = mongoose.Schema;

let clientSchema = new schema({
    clientId: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array }
});

module.exports = mongoose.model("OAuthClients", clientSchema);