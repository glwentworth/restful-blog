/**post route handling code
 * 
 * 
 */
const stringify = require("stringify-object");


module.exports = {
    get(req, res) {
        var store = req.app.get('store');

        //console.log("posts.get: "+stringify(req.body, {indent: '  ', singleQuotes: false}));
        res.send(store);
    },
    add(req,res){
        var store = req.app.get('store');

        console.log("posts.add: "+stringify(req.body, {indent: '  ', singleQuotes: false}) );
        let id = store.posts.length;
        store.posts[id] = req.body;
        res.status(200).send("saved at index: "+id);
        //res.end();
        id +=  1;
        console.log("posts (length: "+id+") "+stringify(store.posts, {indent: '  ', singleQuotes: false}) );

    },
    update(req,res) {
        var store = req.app.get('store');

        console.log("posts.update: ");
    },
    remove(req,res){
        var store = req.app.get('store');
        let id = req.params.postid;

        console.log("posts remoce: item "+id)
        let index = store.posts.length;

        if (id >= index) {
            res.status(401).send("out of bounds");

        } else {
            store.posts.splice(id,1);
            res.status(200).send("ok");
        }
        id+=1;
        console.log("posts (length: "+id+") "+stringify(store.posts, {indent: '  ', singleQuotes: false}) );
    }
}