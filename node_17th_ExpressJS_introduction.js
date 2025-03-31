const express =  require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("Hello , This is a Home Page ...");
})

app.get('/about',(req,res)=>{
    res.send("This is a about page ... ");
})

app.get('/help',(req,res)=>{
    res.send("This is a help page ...");
})

app.listen(5000); 