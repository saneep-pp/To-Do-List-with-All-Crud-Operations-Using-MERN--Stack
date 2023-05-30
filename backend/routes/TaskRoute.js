const {Router}=require("express")
const {getTasks,saveTasks,deleteTasks,updateTasks}=require("../controller/TaskController")
const router=Router()

router.get("/get",getTasks);
router.post("/save",saveTasks);
router.put("/update/:id",updateTasks);
router.delete("/delete/:id",deleteTasks);

module.exports=router;