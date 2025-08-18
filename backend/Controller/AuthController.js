import AuthModel from "../Model/AuthModel.js";

const signup = async (req,res) =>{
      try {
        const {name , email , password} = req.body;
         const RegUser = new AuthModel({name , email , password});
         RegUser.save();

        res.status(200).json({
            success:true,
            message:"User regstered Successfully",
            data:RegUser
        })

      } catch (error) {
        res.status(400).json({
            success:false,
            message:"User Not registered Successfully",
            error:error.message
        })
      }
}

export {signup}