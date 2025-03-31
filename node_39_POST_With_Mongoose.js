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
app.listen(5058);