const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())
const port = 3000;
const JWT_SECRET = 'DetuDragu@105';


async function signUp(req,res){

}

async function login(req, res){

}

async function purchaseCourse(req, res){

}

app.post('/user/signUp', signUp);
app.post('/user/login', login);

//get all courses route
app.get('/viewAllCourses', function(req, res){
    res.json({
        message: "View all course endpoint"
    })
})

// get all the courses that user has purchased
app.get('/user/purchases', function(req, res){
    res.json({
        message: "View all courses purchased by the user"
    })
})

// when user wants to purchase any course following is the endpoint
app.post('/course/purchaseCourse', purchaseCourse)


app.listen(port, () => {
    console.log(`Course selling app is listening on the port ${port}`)
})