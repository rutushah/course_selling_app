// const express = require('express');
// const Router = express.Router;

 const { Router } = require("express");
 const userRouter = Router();

 //calling userdb
 const { userModel } = require("../db")

 //jsonwebtokens for calling admin middle ware
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require("../config");
const {userMiddleWare} = require("../middleware/user");


//user signUp route
userRouter.post('/signUp',   async function(req, res){
    try{
        const email = req.body.email;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        await userModel.create({
            email:email, 
            password: password,
            firstName : firstName,
            lastName: lastName
        });

        res.json({
            message: "Congratulations!!, Your user is successfully signup!!!"
        });
    } catch(err){
        if(err.code === 11000){
            res.status(400).json({
                message: "Username already exists!"
            });
        }else{
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
});


userRouter.post('/login', function(req, res){
    res.json({
        message: "User login Endpoint"
    })
})

// get all the courses that user has purchased
userRouter.get('/purchases', userMiddleWare, async function(req, res){
    res.json({
        message: "View all courses purchased by the user"
    })
})   


module.exports = {
    userRouter : userRouter
}