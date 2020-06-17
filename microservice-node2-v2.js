const express  = require("express");
const app = express(); 
const port = 4000;
app.get("/", function(req,res){
   res.send("[v2] Hello !"); 
});
app.get("/node2", function(req,res){
    res.send("[v2] call node2");
});
app.listen(port, function (){
  console.log("[v2] Server running");
});