// import express from 'express'
// import mongoose, { Mongoose } from 'mongoose'
// import {DB_NAME} from './constants'
import { app } from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
const port=process.env.PORT || 8000
dotenv.config({
  path: "./env",
});

connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server started successfully at http://localhost:/${port}`)
    })
})
.catch((err)=>console.log("connection failed",err))
