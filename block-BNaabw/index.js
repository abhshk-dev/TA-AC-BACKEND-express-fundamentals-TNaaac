// requires
var express=require('express');
// instantiate the app
var app=express();

// middlewares
app.use(express.json());
app.use(epxpress.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));

// routes

// error handler middlewares

// listener
app.listen(4000,()=>{
    console.log('Server running on port 8000')
})
