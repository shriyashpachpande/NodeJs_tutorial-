app.post('/creat',async (req,resp)=>{
    let data = new product(req.body);
    let result = await data.save();
    resp.send(result);
    console.log(result)
})