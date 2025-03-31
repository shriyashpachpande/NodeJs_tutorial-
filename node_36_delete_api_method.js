const express = require('express')
const mongodb = require('mongodb')
const dbConnect = require('./node_29th_dbConnect')
const app = express()
app.use(express.json())

app.delete('/:id',async(req,resp)=>{
    let data = await dbConnect();
    let result = data.deleteOne(
        {_id:new mongodb.ObjectId(req.params.id)}
    )
    resp.send(result)
})
app.listen(5054)