const express=require('express');
const port=6000;
const app = express();
const db=require('./config/mongoose');


app.use('/',require('./routes'));
app.listen(port,()=>{
    console.log(`Server up and running on ${port}`);
})