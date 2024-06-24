import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  password: { type: String, required: true },
  phone: { type: Number },
  isAdmin: { type: Boolean, default: false },
});
const User = mongoose.model("User", userSchema);
export default User;
