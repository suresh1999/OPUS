var express = require('express')

var app =  express()

app.get('/',function (req,res){
    res.send('welocme to home page')
})

app.listen(8012,()=>{
    console.log('Server succesf')
})