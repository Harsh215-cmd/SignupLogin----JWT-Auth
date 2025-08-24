import express from "express";
import { authMiddleware } from "../Middleware/authMiddleware.js";


const router = express.Router();

// Example: only logged-in student can view his profile
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to your profile",
    user: req.user  // comes from decoded token
  });
});

export default router;
