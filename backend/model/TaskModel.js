const mongoose=require('mongoose')

const taskScheme=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model("Task",taskScheme);