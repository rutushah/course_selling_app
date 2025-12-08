// const express = require('express');
// const Router = express.Router;

 const { Router } = require("express");
 const userRouter = Router();

//user signUp route
userRouter.post('/signUp', function(req, res){
    res.json({
        message: "User Sign up endpoint"
    })
})


userRouter.post('/login', function(req, res){
    res.json({
        message: "User login Endpoint"
    })
})

// get all the courses that user has purchased
userRouter.get('/purchases', function(req, res){
    res.json({
        message: "View all courses purchased by the user"
    })
})   


module.exports = {
    userRouter : userRouter
}