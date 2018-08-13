let mongoose = require('mongoose');

let Scheme = mongoose.Schema;

let dbUrl;
let options;
const userScheme = new Scheme({
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    password_reset_token: { type: String, unique: true },
    reset_token_expires: Date,
    name: String,
});

mongoose.model('users', userScheme);

const UserModel = mongoose.model('users');


let userDBHelper = (injecteddbUrl, injectedoptions) => {
    dbUrl = injecteddbUrl;
    options = injectedoptions;
    return {
        registerUserInDB: (phone, password, cb) => {

        },
        getUserFromCrentials: (userName, password, cb) => {

        },
        doesUserExist: (userName, cb) => {

        }
  };
};

module.exports = userDBHelper;
