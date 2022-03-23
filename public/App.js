var express = require('express');
var app = express();
//require("dotenv").config();
var bodyParser= require("body-parser");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get('/',function (req, res){
    res.sendFile(__dirname+'/public/Index.ejs');
});

//always keep this failsafe as the last route
app.get('*',function (req,res){
    res.status(404).send("Cant find the page you requested");
});

app.listen(process.env.PORT || 3000, 
	() => console.log("listening to port: http://localhost:3000/"));
