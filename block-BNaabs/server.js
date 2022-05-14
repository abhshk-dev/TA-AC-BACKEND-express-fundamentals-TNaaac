var express=require('express');

var app=express();


app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname+'/new.html')
})

app.post('/new',(req,res)=>{
    res.json(req.body)
})

app.get('/users/:username',(req,res)=>{
    var username=req.params.username;
    res.send(username);
})
app.listen(3000,()=>{
    console.log(`Server listening on port 3000`)
})