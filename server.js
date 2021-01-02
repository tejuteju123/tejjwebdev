// 1.import or include like statement in express
var express= require('express');
//2.create application
var app=express();
// Tell epress where css and js files are there
app.use(express.static(__dirname+'/frontend'));
//3.define function when somone access our site
app.get('/',function(req,res){
    //res.send('hello bhanu this is my first website');
    res.sendFile(__dirname+'/frontend/html/index.html')
})
app.get('/text-tags',function(req,res){
    //res.send('hello bhanu this is my first website');
    res.sendFile(__dirname+'/frontend/html/texttag.html')
})
app.get('/resume.html',function(req,res){
    //res.send('hello bhanu this is my first website');
    res.sendFile(__dirname+'/frontend/html/resume.html')
})
//4.run application on port
var port=process.env.PORT ||3000;
//once site is up function() will be called automatically
app.listen(port,function(){
    console.log("site is running on http://localhost:"+port);
});