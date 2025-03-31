const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('Please provide a age ')
    }
    else if(req.query.age<18){
        resp.send('You are not allowed to access this page ')
    }
    else{
        next();
    }
}
app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to the home page')
})
app.get('/user',(req,resp)=>{
    resp.send('Welcome to the user page ')
})
app.listen(3009)