require('./node_39_config')
const express = require('express')
const product = require('./node_39_Defining_Schema')

const app = express()
app.use(express.json());


app.post('/creat',async (req,resp)=>{
    let data = new product(req.body);
    let result = await data.save();
    resp.send(result);
    console.log(result)
})

app.get("/list",async (req,resp)=>{
    let data = await product.find();
    resp.send(data);
})

app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    resp.send(data)
})

app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
        {$set:req.body}
    );
    resp.send(data);
})


app.listen(5059)