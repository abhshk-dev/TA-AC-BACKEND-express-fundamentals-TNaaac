
var express=require('express');

var server=express();

server.get('/',(req,res)=>{
    res.send("Learning express")
});
server.listen(3000,()=>{
    console.log(`server listening on 3000`)
});