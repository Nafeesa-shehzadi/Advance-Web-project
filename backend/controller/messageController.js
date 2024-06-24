import { Message } from "../models/messageSchema.js";
import mongoose from "mongoose";

export const sendMessage = async (req, res) => {
  try {
    const { name, date, persons, service } = req.body;
    if (!name || !date || !persons || !service) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    await Message.create({ name, date, persons, service });
    res.status(200).json({
      success: true,
      message: "Booking Done!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = "";
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.date) {
        errorMessage += error.errors.date.message + " ";
      }
      if (error.errors.persons) {
        errorMessage += error.errors.persons.message + " ";
      }
      if (error.errors.service) {
        errorMessage += error.errors.service.message + " ";
      }
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unknown Error",
    });
  }
};
export const getAllmessages = async (req, res) => {
  try {
    const users = await Message.find();
    return res.status(200).json({ data: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const delmessage = async (req, res) => {
  try {
    const messageId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(messageId)) {
      return res.status(400).json({ message: "Invalid message ID" });
    }

    const deletedMessage = await Message.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      return res
        .status(404)
        .json({ message: `Message with ID ${messageId} not found` });
    }

    res
      .status(200)
      .json({ message: `Message with ID ${messageId} deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
