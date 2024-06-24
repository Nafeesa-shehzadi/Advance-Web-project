import express from "express";
import UserController from "../controller/userController.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/", UserController.getAllUsers); // New route to get all users
router.delete("/:id", UserController.delUser);
export default router;
