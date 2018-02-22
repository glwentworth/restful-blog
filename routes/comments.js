/**comment route handling code
 * 
 * 
 */

const stringify = require("stringify-object");

/** exported functions to handle routes for comments
 * 
 */

module.exports = {
    get(req, res) {
        var store = req.app.get('store');
        let index = store.posts.length;
        let id = req.params.postid;

        if (id >= index) {
            res.status(400).send(req.app.get('OB'));

            console.log("comments.get: out of bounds");

        } else {
            res.status(200).send(store.posts[id].comments);

            console.log("comments.get: "+stringify(store.posts[id].comments, {indent: '  ', singleQuotes: false}) );
        }
    },
    add(req,res) {
        var store = req.app.get('store');
        let index = store.posts.length;
        let id = req.params.postid;

        console.log("comments.add body: "+stringify(req.body, {indent: '  ', singleQuotes: false}));

        if (id >= index) {
            res.status(400).send(req.app.get('OB'));
        } else {
            let commentdx = store.posts[id].comments.length;

            store.posts[id].comments = req.body;
            res.status(201).send("saved at index: "+commentdx);
        }     

        console.log("comments.add: "+stringify(store.posts[id].comments, {indent: '  ', singleQuotes: false}));
    },
    update(req,res) {
        var store = req.app.get('store');
        let pindex = store.posts.length;
        let postid = req.params.postid;

        console.log("comments.update: "+stringify(req.body, {indent: '  ', singleQuotes: false}));

        if (postid >= pindex) {
            res.status(400).send(req.app.get('OB'));
        } else {
            let cindex = store.posts[postid].comments.length;
            let cmtid = req.params.commentid;
    
            if (cmtid >= cindex) {
                res.status(400).send(req.app.get('OB'));
            } else {

                console.log("comment to update: "+stringify(store.posts[postid].comments[cmtid], {indent: '  ', singleQuotes: false}));

                store.posts[postid].comments[cmtid] = req.body;
                res.status(201).send(req.app.get('UP'));
            }
        }
    },
    remove(req,res) {
        var store = req.app.get('store');
        let pindex = store.posts.length;
        let postid = req.params.postid;

        if (postid >= pindex) {
            res.status(400).send(req.app.get('OB'));
        } else {
            let cindex = store.posts[postid].comments.length;
            let cmtid = req.params.commentid;
    
            if (cmtid >= cindex) {
                res.status(400).send(req.app.get('OB'));
            } else {
                console.log("comments.remove: "+stringify(req.body, {indent: '  ', singleQuotes: false}));

                store.posts[postid].comments.splice(cmtid,1);
                res.status(201).send(req.app.get('DL'));
            }
        }
    }
}