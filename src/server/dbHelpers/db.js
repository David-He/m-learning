var  mongoose = require('mongoose');

let DB_URL = "mongodb://localhost/m-learning";

mongoose.connect(DB_URL);

/**
  * 连接成功
  */
mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + DB_URL);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {    
    console.log('Mongoose connection disconnected');  
});    

module.exports = mongoose;
