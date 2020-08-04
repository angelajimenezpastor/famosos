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
var nombre = req.body.nombre;
var mes = Number(req.body.mes);
var year = Number(req.body.year);
/*creo el array*/
var nombres = ["Elige mes", "David Bowi", "Rihanna", "Lady Gaga", "Luis Miguel", "Enrique Iglesias","Chayanne", "Santos", "Madonna", "Juanes", "Bruno Mars", "Pedro Fernandez","Ricki Martin"];
/*variable con el resultado de elegir el nombre del famoso segun el mes*/
var nombreFamoso = nombres[mes];
/*calculo edad en años con una resta*/


var edad = 2020 - year;
/*mostrar resultado final*/

/* esta es la manera larga de ponerlo
res.send("<h1> Felicidades " + nombre +
" ,naciste el mismo mes que " + nombreFamoso +
" , este año cumplirás " + edad + " si el coronavirus lo permite </h1>")*/

res.write("<h1> Genial " +nombre+ "</h1>");
res.write("<h2> Naciste el mismo mes que  " +nombreFamoso+ "</h2>");
res.write("<h2> Este año cumpliras " +edad+ "</h2>");
res.write("<h1> Si el coronavirus lo permite </h1>");

});

app.listen(3000, function(){
  console.log("angela buenos dias");
});
