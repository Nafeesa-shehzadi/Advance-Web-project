import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  date: {
    type: Date,
    required: [true, "Date is required!"],
    validate: {
      validator: function (value) {
        return validator.isDate(value);
      },
      message: "Please provide a valid date!",
    },
  },
  persons: {
    type: Number,
    required: [true, "Number of persons is required!"],
    min: [1, "There must be at least 1 person!"],
  },
  service: {
    type: String,
    required: [true, "Subject Required!"],
    minLength: [5, "Subject must contain at least 5 characters!"],
  },
});

export const Message = mongoose.model("Booking", messageSchema);
