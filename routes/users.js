import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  removeUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUserById);
router.delete("/:id", removeUser);
router.patch("/:id", updateUser);

export default router;
