const { Router } = require("express")
const adminRouter = Router();
const { adminModel, userModel } = require("../db")

//jsonwebtokens for calling admin middle ware
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require("../config");
const {adminMiddleWare} = require("../middleware/admin");


//admin signUp route
adminRouter.post('/signUp',async function(req, res){
     try{
            const email = req.body.email;
            const password = req.body.password;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
    
            await adminModel.create({
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
                    message: "Email already exists!"
                });
            }else{
                res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        }
})

// admin login Route
adminRouter.post('/login', async function(req, res){
        const email = req.body.email;
        const password = req.body.password;

        const admin = await adminModel.findOne({
            email:email,
            password:password
        })

        console.log(admin);
        if(admin){
            const token = jwt.sign({
                id: admin._id.toString
            },
            JWT_ADMIN_PASSWORD
        );

        console.log(admin._id.toString);
        res.json({
            token,
            message:"Admin is logged in Successfully!!!"
        })
        }else{
            res.status(403).json({
                message:"Incorrect username or password!!"
            })
        }
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