const express=require('express');
const router=express.Router();

router.use('/student',require('./studentRoute'));

//api testing
router.get('/ping',(req,res)=>{
    res.send('pong');
})
module.exports = router;