// console.log('Hello World')

// const http=require('http');

// http.createServer(function(req,res){
//     res.end('Hello World Again!!!!')
// }).listen(8889)

const express = require('express');
const fs=require('fs');

const data = JSON.parse(fs.readFileSync('data/data.json'));
console.log(data);

const app=express();
app.use(express.static(__dirname+'/public'))
    .listen(8889)

app.get('/load',function(req,res){
    res.send(data)
})

app.get('/update',function(req,res){
    data.forEach(d => {
        d.x=Math.random()*12000;
        d.y=Math.random()*10000;
        d.r=Math.random()*10;
    });

    res.send(data)
})