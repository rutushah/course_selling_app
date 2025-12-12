const { Router } = require("express");
const courseRouter = Router();

//calling coursemodel and purchasemodel
const { courseModel } = require("../db")
const { purchaseModel } = require("../db")

//middleware user 
const {userMiddleWare} = require("../middleware/user");



    //get all courses route
courseRouter.get('/viewAllCourses', function(req, res){
    res.json({
        message: "View all course endpoint"
    })
})

// when user wants to purchase any course following is the endpoint
courseRouter.post('/purchaseCourse', function(req, res){
    res.json({
        message: "Purchase course endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}