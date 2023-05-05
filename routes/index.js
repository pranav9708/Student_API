const express=require('express');
const router=express.Router();

router.use('/student',require('./studentRoute'));

module.exports = router;