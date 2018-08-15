const express = require('express')
const os = require('os')
const oAuthModel = require('./dbHelpers/oAuthModel')
const oAuth2Server = require("express-oauth-server")
const bodyParser = require("body-parser")
const authRoutes = require("./routers/authRoute")(express.Router());

const app = express();

app.oauth = new oAuth2Server({
    model: oAuthModel,
    grants: ['password'],
    debug: true,
    
    useErrorHandler: false, 
    continueMiddleware: false,
    
})

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use(app.oauth.errorHandler());
//app.use(app.oauth.authorize());

app.use('/auth', authRoutes);

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
