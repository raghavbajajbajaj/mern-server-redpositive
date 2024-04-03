const express = require('express')
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
app.use(bodyParser.json());
const cors = require('cors')
const userRouter = require("./router/userRouter")
app.use(cors())
dotenv.config();
app.use(express.json())


mongoose.connect(process.env.DB_URL)

console.log("db connected succesfully")
app.listen(process.env.PORT || 8000, () => {
    console.log(`server is working on ${process.env.BASE_URL}`)
}) 
app.use(userRouter)

 


