const Student=require('../models/student');

module.exports.createStudent=async (req,res)=>{
    try{
        const user=await Student.create(req.body);
        if(user){
            return res.send(user);
        }else{
            return res.send("Student not created")
        }
    }catch(err){
        console.log("Error",err);
        return res.status(500);
    }
}

module.exports.getAll=async (req,res)=>{
    try{
        const user=await Student.find({});
        if(user){
            return res.send(user);
        }else{
            return res.send("Student Not found");
        }
    }catch(err){
        console.log("Error",err);
        return res.status(500);
    }
}

module.exports.getById=async (req,res)=>{
    try{
        const user=await Student.find({_id:req.params.id});
        if(user){
            return res.send(user);
        }else{
            return res.send("Student Not found");
        }
    }catch(err){
        console.log("Error",err);
        return res.status(500);
    }
}

module.exports.updateStudent=async(req,res)=>{
    try{
        const user=await Student.findByIdAndUpdate(req.params.id,req.body);
        if(user){
            return res.send(user);
        }else{
            return res.send("Student Not found");
        }
    }catch(err){
        console.log("Error",err);
        return res.status(500);
    }
}

module.exports.deleteStudent=async(req,res)=>{
    try{
        const user=await Student.findByIdAndDelete(req.params.id);
        if(user){
            return res.send(user);
        }else{
            return res.send("Student Not found");
        }
    }catch(err){
        console.log("Error",err);
        return res.status(500);
    }
}