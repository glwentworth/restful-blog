/**comment route handling code
 * 
 * 
 */

 module.exports = {
     get(req, res) {
        var store = req.app.get('store');
         
        console.log("comments.get: ");
     },
     add(req,res) {
        var store = req.app.get('store');

        console.log("comments.add: ");
     },
     update(req,res) {
        var store = req.app.get('store');

        consle.log("comments.update: ")
     },
     remove(req,res) {
        var store = req.app.get('store');

        console.log("comments.remove: ");
     }
 }