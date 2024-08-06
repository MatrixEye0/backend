import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
},
fullname:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    index:true
},
Avatar:{
    type:String,
    required:true,
},
coverimage:{
    type:String,
},
watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"video"
    }
],
password:{
    type:String,
    required:[true,"Password is required"],
},
refreshToken:{
    type:String,
}
})

export const User = mongoose.model("user",userSchema)