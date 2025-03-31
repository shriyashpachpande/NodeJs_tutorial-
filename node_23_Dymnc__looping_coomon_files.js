const express = require('express');
const path = require('path');

const app = express()
app.set('view engine','ejs');
app.get('/profile_23',(req,resp)=>{
    const user = {
        name:'shriyash',
        age:21,
        email:'shri@test.com',
        skills : [
            'javascript',
            'react',
            'node',
            'express',
            'mongodb',
            'java',
            'python',
            'c++',
            'c#',
            'ruby',
            'swift',
            'kotlin',
            'php'
        ]
    }
    resp.render('profile_23',{user})
});
app.get('/lgoin',(req,resp)=>{
    resp.render(login)
})


app.listen(3007)