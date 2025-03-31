const express = require('express');
const app = express();

app.get("",(req,resp)=>{
    console.log("Data sent by browser : ", req.query.name);
    resp.send("Hello " + req.query.name);
    resp.send("Helllo This is a home page . . .")
})
app.listen(5400);