//calling dotenv file named config
require('dotenv').config()
console.log(process.env.DB_URL)

const express = require('express');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

//using middlewares


const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    // db connection
    await mongoose.connect(process.env.DB_URL)
    console.log("Connected to Database")

    app.listen(port, () => {
        console.log(`Course selling app is listening on the port ${port}`)
    })
}

main()

