const http = require('http')
const data = require('./node_10th_Simple_API_Data')

http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type' : 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000)