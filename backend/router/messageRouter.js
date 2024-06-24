import express from "express";
import {
  sendMessage,
  getAllmessages,
  delmessage,
} from "../controller/messageController.js";
const router = express.Router();

router.post("/send", sendMessage);
router.get("/", getAllmessages);
router.delete("/:id", delmessage);

export default router;
