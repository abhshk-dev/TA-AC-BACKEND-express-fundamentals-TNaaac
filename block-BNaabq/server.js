var express=require('express');
var logger=require('morgan');
var cookieParser=require('cookie-parser');

var app=express();

//middleware

app.use(cookieParser());

app.use((req,res,next)=>{
    console.log(req.cookies);
    next();
});

//

app.use(logger('dev'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.listen(4000,()=>{
    console.log(`Server listening on port 4000`)
})