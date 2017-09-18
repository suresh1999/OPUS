var express = require('express')
var pool = require('../conf');

var router = express.Router()

router.get('/',function(req,res){
    res.send('Welcome to the API server page')
});

router.post('/login', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    pool.query('SELECT * from user where username = ?',[username],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else {
            res.json(result)
        }
    });
})

router.post('/register',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.body)
    pool.query('INSERT into user values(?,?)',[username,password],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else {
            res.send(result)
        }
    });

})
module.exports = router
