const express  = require("express");
var request = require("request");

const app = express(); 

const port = 8080;
app.get("/", function(req,res){
   res.send("Hello World!"); 
});
app.get("/node1", function(req,res){
  
 
  request.get("http://node2:4000/node2",function(error,response,body){
           if(error){
            res.send("not access to service2!!!");
           }else{
            res.send("response M2:node2 ["+response.body+"]");
         }
});
    
});

app.listen(port, function (){
  console.log("Server running");
});