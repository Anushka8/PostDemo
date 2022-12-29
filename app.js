var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Ino", "Shikamaru", "Choji"];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); //to avoid adding extension .ejs everytime

app.get("/", function(req,res){
	res.render("home");
});

app.post("/load",function(req,res){
	res.redirect("/friends");
});

app.get("/friends", function(req,res){	
	res.render("friends", {friends: friends});
});

app.post("/addfriend",function(req,res){
	var addFriend = req.body.newfriend;	
	friends.push(addFriend);
	res.redirect("/friends");
});

app.listen(process.env.PORT,process.env.IP,function(){
	console.log("Server started");
});