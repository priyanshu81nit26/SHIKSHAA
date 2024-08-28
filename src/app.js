import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app=express()

// middlwares :
// middleares : middlewares are type of check function which passes data further
// if their condition matches to true;
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true
}))


// accepting json :
app.use(express.json({limit:"16kb"}))

// url configuration -> if url se data aayega
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export {app}