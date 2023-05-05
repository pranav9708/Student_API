const express=require('express');
const port=6000;
const app = express();
const bodyParser = require('body-parser');
const db=require('./config/mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',require('./routes'));
app.listen(port,()=>{
    console.log(`Server up and running on ${port}`);
})