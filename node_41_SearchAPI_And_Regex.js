const express = require('express');
require('./node_39_config')
const product = require('./node_39_Defining_Schema')

const app = express();
app.use(express.json())

app.get("/search/:key", async (req,resp) =>{
    console.log(req.params.key)
    let data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})
    


app.listen(5060)