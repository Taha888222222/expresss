const express=require("express")
const app=express();
const fs=require("fs")
const PORT=5600
const v = require('./verif');


app.get('/',v,(req,res)=>{
    fs.readFile('./home.html','utf8',(err,data)=>{
        err ? res.end('file no found') && console.log(err) : res.end(data);
    })
})
app.get('/contact',v,(req,res)=>{
    fs.readFile('./Contact.html','utf8',(err,data)=>{
        err ? res.end('file no found') && console.log(err) : res.end(data);
    })
})
app.get('/service',v,(req,res)=>{
    fs.readFile('./Services.html','utf8',(err,data)=>{
        err ? res.end('file no found') && console.log(err) : res.end(data);
    })
})







app.listen(PORT,(err)=>{
    err ? console.log(err) :
    console.log(`the server is running on prot ${PORT}`)
})