var express = require("express");
var app = express();

var bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/", function (req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req,res){
res.setHeader("Content-Type", "text/html; charset=utf-8");


})
