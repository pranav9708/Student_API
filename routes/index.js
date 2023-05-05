const express=require('express');
const router=express.Router();

router.use('/student',require('./studentRoute'));

//api testing
router.get('/ping',(req,res)=>{
    res.status(200).json({data:"pong"});
})
module.exports = router;