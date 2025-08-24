import mongoose from "mongoose";

const AuthScema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const AuthModel = mongoose.model("users",AuthScema);
export default AuthModel;