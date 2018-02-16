/**post route handling code
 * 
 * 
 */
const stringify = require("stringify-object");


module.exports = {
    get(req, res) {
        console.log("posts.get: "+stringify(req, {indent: '  ', singleQuotes: false}));
        res.end;
    },
    add(req,res){
        console.log("posts.add: ");
    },
    update(req,res) {
        console.log("posts.update: ");
    },
    remove(req,res){
        console.log("posts.remove: ");        
    }
}