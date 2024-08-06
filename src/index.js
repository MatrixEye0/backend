import mongoose from "mongoose";
import {db} from "./constant";
import express from"express";
const app = express()

(async ()=>{
    try{
mongoose.connect(`${process.env.MONGODB_URL}`)
app.on("error" ,(error)=>{
    console.log("error",error)
    throw error
})

app.listen(process.env.PORT,()=>{
console.log(`app on listing port ${process.env.PORT}`)
})
    } catch(error){
        console.log("ERROR",error)
        throw error
    }

})