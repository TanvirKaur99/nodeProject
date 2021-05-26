var express=require('express');
var app=express();
var bodyparser=require('body-parser');

var route=require("./routes/userRoutes");


app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use('/',route);

app.listen(3000,(err)=>{
    if(err){ console.log(err)}
    else{console.log("server is running")}
})

