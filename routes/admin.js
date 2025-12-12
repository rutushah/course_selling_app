const { Router } = require("express")
const adminRouter = Router();
const { adminModel } = require("../db")

//jsonwebtokens for calling admin middle ware
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require("../config");
const {adminMiddleWare} = require("../middleware/admin");


//admin signUp route
adminRouter.post('/signUp', function(req, res){
    res.json({
        message: "Admin Sign up endpoint"
    })
})

// admin login Route
adminRouter.post('/login', function(req, res){
    res.json({
        message: "Admin login Endpoint"
    })
})

// course creation route
adminRouter.post("/createCourse", adminMiddleWare, async function(req, res){
    res.json({
        message: "New course created Successfully!!"
    })
})

// change the course creation name route
adminRouter.put("/createCourse", adminMiddleWare, function(req, res){
    res.json({
        message: "Course Name changed Successfully!!"
    })
})

// course creation route
adminRouter.get("/createCourse/bulk", adminMiddleWare, function(req, res){
    res.json({
        message: "View all created courses!!"
    })
})

module.exports = {
    adminRouter: adminRouter
}