import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

//used iife to get code execution faster:
const connectDb=async ()=>{
    try {
        const connectionInstance= await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`mongodb connectd !! DB HOST :
            ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("error",error)
        process.exit(1)
    }
}

export default connectDb
