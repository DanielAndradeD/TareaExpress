var express = require("express");
var app = express();
app.get("/", function(request, response) {
  response.send("Hola mundo  en Express");
});

app.listen(3000, function() {
  console.log("Mi primer server corriendo en https://localhost:3000");
});