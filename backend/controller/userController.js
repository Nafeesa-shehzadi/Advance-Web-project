import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    "process.env.JWT_SECRET_KEY", //process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};
const UserController = {
  // Register a new user
  async register(req, res) {
    try {
      const { name, email, password, phone } = req.body;
      if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: "All fields are required" });
      } else {
        const existuser = await User.findOne({ email });
        if (existuser) {
          res.status(400).json({ message: "User already exist" });
        } else {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const user = new User({ name, email, password: hashPassword, phone });
          await user.save();
          res.status(201).json({ message: "User created successfully" });
        }
      }
    } catch (err) {
      res.status(400).json({ message: "Error creating user" });
    }
  },
  // Login an existing user
  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      } else {
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        } else {
          if (user && bcrypt.compare(password, user.password)) {
            const token = generateToken(user);
            const { password: userPassword, ...rest } = user._doc;
            res.status(200).json({
              status: true,
              message: "Successfully login",
              token,
              data: { ...rest },
            });
          } else {
            res.status(401).json({ message: "Invalid Credentials" });
          }
        }
      }
    } catch (err) {
      res.status(400).json({ message: "Error logging in" });
    }
  },
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      return res.status(200).json({ data: users });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async delUser(req, res) {
    try {
      const userId = req.body.id; // assuming the ID is passed in the request body
      await User.findByIdAndDelete(userId);
      return res
        .status(200)
        .json({ message: `User with ID ${userId} deleted successfully` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default UserController;
