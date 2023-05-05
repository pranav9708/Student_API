const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
    },
    class:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

module.exports=mongoose.model('student',studentSchema);