import mongoose from "mongoose";

const Database = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MongoDbUrl);
        console.log("databse Connected Successfully");
    } catch (error) {
        console.log("databse Not Connected");
    }
}
export default Database