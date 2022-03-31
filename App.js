var express = require('express');
var app = express();
var bodyParser= require("body-parser");
var axios = require("axios");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

//routes
app.get('/',function (req, res){
   axios.get("http://open-api.myhelsinki.fi/v2/places/?tags_search=shopping&language_filter=fi%2Cen&limit=50")
        .then(response=>{
            var data = response.data;
            var data = data.data; 
            var items=data;

        
   res.render("pages/index", {Heading:"Project 2!", text: "Welcome again", footerNote: "I like your dedication! (￣▽￣)ノ ", items: items});        
        });
 });

//always keep this failsafe as the last route
app.get('*',function (req,res){
    res.status(404).send("Cant find the page you requested");
});

app.listen(process.env.PORT || 3000, 
	() => console.log("listening to port: http://localhost:3000/"));
