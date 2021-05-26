var express=require('express');
var usetrl=require("../controllers/userControllers");


var approutes=express.Router();
approutes.get('/',usetrl.newFile);
approutes.get('/home',usetrl.main);
approutes.get('/user',usetrl.file2);

module.exports=approutes;
