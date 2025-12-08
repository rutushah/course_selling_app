const { Router } = require("express")
const adminRouter = Router();

adminRouter.use(AdminMi)

//admin signUp route
userRouter.post('/signUp', function(req, res){
    res.json({
        message: "Admin Sign up endpoint"
    })
})

// admin login Route
userRouter.post('/login', function(req, res){
    res.json({
        message: "Admin login Endpoint"
    })
})

// course creation route
adminRouter.post("/createCourse", function(req, res){
    res.json({
        message: "New course created Successfully!!"
    })
})

// change the course creation name route
adminRouter.put("/createCourse", function(req, res){
    res.json({
        message: "Course Name changed Successfully!!"
    })
})

// course creation route
adminRouter.get("/createCourse/bulk", function(req, res){
    res.json({
        message: "View all created courses!!"
    })
})

module.exports = {
    adminRouter: adminRouter
}