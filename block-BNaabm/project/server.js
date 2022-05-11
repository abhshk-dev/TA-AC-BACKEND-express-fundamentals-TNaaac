var express=require('express');

var app=express();

app.use('/',(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    next();

})
app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.listen(4000,()=>{
    console.log(`Server listening on port 4000`)
})