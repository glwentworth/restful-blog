/** restful-blog
 *  module 2  lab assignment
 *  
 */

/* required modules
*/
const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyparser = require('body-parser');
const stringify = require("stringify-object");

/*  our code
*/
const comments = require('./routes/comments.js');
const posts = require('./routes/posts.js');

/* he in memory data...
*/

let store = {
    posts: [{
        name: 'Top 10 ES6 Features every Web Developer must know',
        url: 'https://webapplog.com/es6',
        text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
        comments: [
            {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
            {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
            {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}      
        ]
    }]
}
/* 
/* create and setup the express app
*/
var app = express();

app.use(bodyparser.json());
app.use(logger('dev'));
app.use(errorhandler());


app.get('/', (req, res) => {
    res.status(200).send('{"name":"restful blog", "version":"1.0"}'+'\n'+
        stringify(store, {indent: '  ', singleQuotes: false})
    );
});

/* our routes
*/
app.get('/posts', posts.get);
app.post('/posts', posts.add);
app.put('/posts/:postid/', posts.update);
app.delete('/posts/:postid/',posts.remove);

app.get('/posts/:postid/comments', comments.get);
app.post('/posts/:postid/comments', comments.add);
app.put('/posts/:postid/comments/:commentid', posts.update);
app.delete('/posts/:postid/comments/:commentid/',posts.remove);

*/

/*** */

console.log('we are now listening....');
 
app.listen(3000);

/** end of file */