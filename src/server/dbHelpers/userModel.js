let mongoose = require('./db');

let Scheme = mongoose.Schema;


const userScheme = new Scheme({
    phoneNum: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    // password_reset_token: { type: String, unique: true },
    // reset_token_expires: Date,
    name: String,
});

let UserModel = mongoose.model('oAuthUser', userScheme);


module.exports = UserModel;
