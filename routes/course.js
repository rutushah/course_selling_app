const { Router } = require("express");
const courseRouter = Router();

//calling coursemodel and purchasemodel
const { courseModel } = require("../db")
const { purchaseModel } = require("../db")

//middleware user 
const {userMiddleWare} = require("../middleware/user");



    //get all courses route
courseRouter.get('/preview', async function(req, res){
    const courses = await courseModel.find({});
    res.json({
       courses
    })
})

// when user wants to purchase any course following is the endpoint
courseRouter.post('/purchaseCourse', async function(req, res){

    const userId = req.userId;
    const courseId = req.body.courseId;

    //check whether the user has actually paid the price or not?
    const purchaseExists =  await purchaseModel.findOne({
        userId,
        courseId
    })

    if(purchaseExists){
        return res.status(400).json({
            message: "Course already purchased!!"
        });
    }

    const purchaseCourse = await purchaseModel.create({
         userId,
         courseId
    })

    res.json({
        message: "You have successfully bought this course!!",
        purchaseCourse
    });

})


module.exports = {
    courseRouter: courseRouter
}