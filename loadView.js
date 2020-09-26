const mc = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
exports.loadView = function(app){
    
    app.set('view engine', 'ejs');

    var filepath = __dirname;

    app.listen(8000, function(){});

    app.get("/", function(req, res){

        res.render('allBlogs.ejs', {inipath:filepath});

    });

    app.get("/addBlogs", function(req, res){

        res.render('addBlog.ejs', {inipath:filepath});

    });

    app.get("/blogDetails/:blogId", function(req, res){

        mc.connect('mongodb://localhost:27017', function(err, dbs){
            var db = dbs.db("raj");
            var col = db.collection("blogs");
            console.log(req.params.blogId);
            col.find({_id:ObjectId(req.params.blogId)}).toArray(function(err, docs){
                // console.log(docs);
                res.render("blogDetails.ejs", {bdetails:docs[0]});
                console.log({bdetails:docs[0]});
            });
        });
        

    });


    // Included Files Loading
    app.get("/vendors/*.css", function(req, res){
        res.sendFile(__dirname+req.url);
    });

    app.get("/vendors/*.js", function(req, res){
        res.sendFile(__dirname+req.url);
    });

    app.get("/uploads/*", function(req, res){
        res.sendFile(__dirname+req.url);
    });
    
    
    
}