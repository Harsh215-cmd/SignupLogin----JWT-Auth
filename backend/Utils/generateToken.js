// utils/generateToken.js
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  // user = {_id, email, name} → choose what you want to store
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // token valid for 1 hour
  );
};

export {generateToken}