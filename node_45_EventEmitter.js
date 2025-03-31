const express = require('express');
const app = express();
const EventEmitter = require('events')
const event = new EventEmitter();


let count = 0;
event.on('countAPI',()=>{
    count++;
    console.log('Event Called',count);
})
app.get('/',(req,resp)=>{
    resp.send("API Called")
    event.emit('countAPI')
})
app.get('/search',(req,resp)=>{
    resp.send("Search API Called")
    event.emit('countAPI')
})
app.get('/update',(req,resp)=>{
    resp.send('Update API Called')
    event.emit('countAPI')
})

app.listen(5062)