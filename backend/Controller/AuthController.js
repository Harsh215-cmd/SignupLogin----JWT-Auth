import AuthModel from "../Model/AuthModel.js";
import { generateToken } from "../Utils/generateToken.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    const existingUser = await AuthModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists !",
      });
    }

    const RegUser = new AuthModel({ name, email, password });
    await RegUser.save();

        // 🔑 Generate token after signup
    // const token = generateToken(RegUser);

    res.status(200).json({
      success: true,
      message: "User regstered Successfully",
      // token,
      data: RegUser
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "User Not registered Successfully",
      error: error.message
    })
  }
}

const Login = async (req,res) =>{
  try {
    const { email, password } = req.body;

    const existing = await AuthModel.findOne({email})

    if(!existing){
      return res.status(400).json({
        success:false,
        message:"User Not Found"
      })
    }
    

    if(password!=existing.password){
      return res.status(400).json({
        success:false,
        message:"Wrong PassWord"
      })
    }

     const token = generateToken(existing);

    res.status(200).json({
      success:true,
      message:"user Log-in successfull",
      token
    })
    
  } catch (error) {
    res.status(400).json({
      success:true,
      message:"Something Gone Wrong",
      error:error.message
    })
    
  }
}

export { signup , Login}