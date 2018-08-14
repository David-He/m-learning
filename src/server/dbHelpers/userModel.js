let mongoose = require('./db');

let Scheme = mongoose.Schema;


const userScheme = new Scheme({
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    password_reset_token: { type: String, unique: true },
    reset_token_expires: Date,
    name: String,
});

const UserModel = mongoose.model('oAuthUsers', userScheme);


module.exports = UserModel;
