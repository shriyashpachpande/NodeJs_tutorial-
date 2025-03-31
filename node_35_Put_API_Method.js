const express = require('express')
const dbConnect =  require('./node_29th_dbConnect');
const app = express()

app.use(express.json())

app.put('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    )
    resp.send(result)
})



app.put('/:name',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    console.log(result)
})
app.listen(5053)
