const { Router } = require("express");
const courseRouter = Router();


    //get all courses route
courseRouter.get('/viewAllCourses', function(req, res){
    res.json({
        message: "View all course endpoint"
    })
})

// when user wants to purchase any course following is the endpoint
courseRouter.post('/course/purchaseCourse', function(req, res){
    res.json({
        message: "Purchase course endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}