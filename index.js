const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())
const port = 3000;
const JWT_SECRET = 'DetuDragu@105';


app.use("/user", userRouter);
app.use("/course", courseRouter);




app.listen(port, () => {
    console.log(`Course selling app is listening on the port ${port}`)
})