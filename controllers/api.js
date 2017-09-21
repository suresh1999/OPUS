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
    pool.query('SELECT * from user where username = ? and password = ?',[username,password],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else {
            if(result.length){
                res.send(200).json({"message":"login successfull"});
            }
            else{
                res.json(500,{"error":"username/password is invalid"});
            }
        }
    });
})

router.get('/username/:name',function(req,res){
    var username = req.param.name;
    pool.query('SELECT username from user where username = ?',[username],function(err,result){
        if(err){
            res.status(500).json({"error":true,"msg":err.toString()});
        }
        else if(result.length == 0){
            res.status(200).json({"error":false,"msg":"this username is available"});
        } else {
            res.status(200).json({"error":true,"msg":"this username is available"});
        }
    })
})

router.post('/register',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    pool.query('INSERT into user values(?,?)',[username,password],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else {
            res.status(200).json({"success":true, "msg":"user account successfully created"});
        }
    });

})
module.exports = router
