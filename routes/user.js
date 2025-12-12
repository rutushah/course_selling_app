// const express = require('express');
// const Router = express.Router;

 const { Router } = require("express");
 const userRouter = Router();

 //calling userdb
 const { userModel, purchaseModel, courseModel} = require("../db")

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


userRouter.post('/login', async function(req, res){
       const email = req.body.email;
        const password = req.body.password;

        const user = await userModel.findOne({
            email:email,
            password:password
        })

        console.log(user);
        if(user){
            const token = jwt.sign({
                id: user._id.toString
            },
            JWT_USER_PASSWORD
        );

        console.log(user._id.toString);
        res.json({
            token,
            message:"User is logged in Successfully!!!"
        })
        }else{
            res.status(403).json({
                message:"Incorrect username or password!!"
            })
        }
})

// get all the courses that user has purchased
userRouter.get('/purchases', userMiddleWare, async function(req, res){
    
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    })
    
    const coursesData = await courseModel.find({
        _id: {$in: purchases.map(x=> x.courseId)}
    })
    
    res.json({
       purchases,
       coursesData
    })
})   


module.exports = {
    userRouter : userRouter
}