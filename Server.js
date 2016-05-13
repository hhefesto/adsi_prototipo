var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
    // console.log("/" + req.method); 
    next();
});

app.use(express.static('public'));

router.get("/",function(req,res){
    // console.log("request address: " + req.connection.remoteAddress)
    res.sendFile(path + "home_2.html");
});

router.get("/bd",function(req,res){
    res.sendFile(path + "page_bd.html");
});

router.get("/lang",function(req,res){
    res.sendFile(path + "page_lang.html");
});

router.get("/deps",function(req,res){
    res.sendFile(path + "page_deps.html");
});

router.get("/deps_tree",function(req,res){
    res.sendFile(path + "page_depstree.html");
});

router.get("/deps_tree2",function(req,res){
    res.sendFile(path + "page_depstree_2.html");
});

app.use("/",router);

app.use("*",function(req,res){
    res.sendFile(path + "404.html");
});

app.listen(80,function(){
    // console.log("Live at Port 80");
});
