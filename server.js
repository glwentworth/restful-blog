/** restful-blog
 *  module 2  lab assignment
 *  
 */

 const express = require('express');
 const logger = require('morgan');
 const errorhandler = require('errorhandler');
 const bodyparser = require('body-parser');

 const comments = require('./routes/comments.js');
 const posts = require("./routes/posts");

 /* 
 /* create and setup the express app
 */
 var app = express();

app.use(bodyparser.json());
app.use(logger('dev'));
app.use(errorhandler());


 app.get('/', (req, res) => {
     res.status(200).send('{"name":"restful blog", "version":"1.0"}');
 })
 
 /*** */

console.log('we are now listening....');
 
 app.listen(3000);

 /** end of file */