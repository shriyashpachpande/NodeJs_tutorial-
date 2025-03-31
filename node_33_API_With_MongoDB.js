const express = require('express');
const dbConnect = require('./node_29th_dbConnect');
const app = express()

app.get('/', async(req,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data)

})
app.listen(5051)