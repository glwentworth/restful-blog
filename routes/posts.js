/**post route handling code
 * 
 * 
 */
const stringify = require("stringify-object");

const OK = "\nok\n";

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
        res.status(201).send("\nsaved at index: "+id);

        id +=  1;
        console.log("posts (length: "+id+") "+stringify(store.posts, {indent: '  ', singleQuotes: false}) );

    },
    update(req,res) {
        var store = req.app.get('store');
        let index = store.posts.length;
        let id = req.params.postid;

        console.log("post.update: "+stringify(req.body, {indent: '  ', singleQuotes: false}));

        if (id >= index) {
            res.status(401).send(req.app.get('OB'));

        } else {
            store.posts[id] = req.body;
            res.status(201).send(req.app.get('UP'));

            console.log("posts.update: "+"id: "+id+" posts length: "+index);
        }

        console.log("posts (length: "+id+") "+stringify(store.posts, {indent: '  ', singleQuotes: false}) );
    },
    remove(req,res){
        var store = req.app.get('store');
        let id = req.params.postid;

        console.log("posts remove: item "+id)
        let index = store.posts.length;

        if (id >= index) {
            res.status(401).send(req.app.get('OB'));

        } else {
            store.posts.splice(id,1);
            res.status(201).send(req.app.get('DL'));
        }
        id+=1;
        console.log("posts (length: "+id+") "+stringify(store.posts, {indent: '  ', singleQuotes: false}) );
    }
}