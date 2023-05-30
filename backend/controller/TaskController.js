const TaskModel=require("../model/TaskModel")

module.exports.getTasks=async(req,res)=>{
    const task = await TaskModel.find()
    res.send(task)
   
}

module.exports.saveTasks=(req,res)=>{
    const {task}=req.body
    TaskModel.create({task})
    .then((data)=>{
   console.log("Saved Data Successfully...");
   res.status(201).send(data)
    }).catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something Went Wrong..!"})
    })
   
}

module.exports.updateTasks=(req,res)=>{
    const {id}=req.params
    const {task}=req.body
    TaskModel.findByIdAndUpdate(id,{task})
    .then(()=>res.send("Updated Successfully...."))
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something Went Wrong..!"})
    })
   
}

module.exports.deleteTasks=(req,res)=>{
    const {id}=req.params
   
    TaskModel.findByIdAndDelete(id)
    .then(()=>res.send("Deleted Successfully...."))
    .catch((err)=>{
        console.log(err);
        res.send({error:err,msg:"Something Went Wrong..!"})
    })
   
}