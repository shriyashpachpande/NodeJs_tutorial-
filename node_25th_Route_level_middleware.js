const express = require('express');
const app = express();
const reqFilter = require('./route_level_middleware')


// const reqFilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please provid a age")
//     }
//     else if(req.query.age<18){
//         resp.send("You are not allowed to enter this page")
//     }
//     else{
//         next()
//     }
// }

app.get('/',(req,resp)=>{
    resp.send("Welcome to the home page")
})
app.get('/user',reqFilter,(req,resp)=>{
    resp.send("Welcome to the user page")
})
app.get('/about',(req,resp)=>{
    resp.send("Welcome to the about page")
})
app.listen(3010)