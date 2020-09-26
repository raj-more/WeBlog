const mc = require('mongodb').MongoClient;
exports.getBlogDetails = function(bid){
    mc.connect('mongodb://localhost:27017', function(err, dbs){
        var db = dbs.db("raj");
        var col = db.collection("blogs");
        col.find().toArray(function(err, docs){
            
        });
    });
}