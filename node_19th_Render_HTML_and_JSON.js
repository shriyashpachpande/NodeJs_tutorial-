const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
        <h1>Hello & Welcome to this page...</h1>
        <a href="/about">Go To About Page</a>
    `)
})

app.get("/about", (req, resp) => {
    resp.send(`
        <input type = "text" placeholder="username" />
        <input type = "password" placeholder="password"/>
        <button>Submit</button>
        <a href="/">Go Home</a>
    `);
})

app.get("/help", (req, resp) => {
    resp.send(`
        [
            {
                name : 'yash',
                email : 'yash@gmail.com'
            },
            {
                name : 'shriyash',
                email : 'shriyash@gmail.com'
            },
        ]    
    `)
})

app.listen(5600)