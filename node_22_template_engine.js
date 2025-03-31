const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.get('/profile',(req,resp)=>{

    const user =  {
        name :' Shriyash',
        age :21,
        email :'shriyash@gmail.com'
    }
    resp.render('profile',{user});
});
app.listen(5006);