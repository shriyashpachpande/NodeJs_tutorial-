const express =  require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public_website')
app.use(express.static(publicPath));

app.listen(5400);