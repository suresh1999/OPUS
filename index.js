//a web serrvice platform

let express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')
    path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // support json encoded bodies

var apis = require('./controllers/api');

app.use('/api',apis);

app.get('/',function(req,res){
    console.log(req.get('Content-Type'))
    res.end('hello world');
})

// basic 

app.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'temps','login.html'));
})

//account

app.post('/user/account/delete',function(req,res){

})

app.post('/register',function(req,res){
    
})

app.post('/user/account/change-username',function(req,res){
    
})

app.post('/user/login/verify',function(req,res){

})

app.get('/user/account/info',function(req,res){

});

//password

app.post('/password/reset',function(req,res){

});

app.post('/user/password/verify',function(req,res){

})

app.post('/user/password/change',function(req,res){

})

app.post('/password/forgot',function(req,res){

})

// logout

app.get('/user/logout',function(req,res){
    
})
app.listen(8080,function(){
    console.log('serer succesfully started on port 8080');
})