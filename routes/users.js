import express from "express";
import User from "../models/User.js";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

const findUser = async (req, res, next) => {
  let user = null;

  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
};

// get all users
router.get("/", getUsers);

// get a single user
router.get("/:id", findUser, getUser);

// create a user
router.post("/", createUser);

// update a user
router.patch("/:id", findUser, updateUser);

// delete a user
router.delete("/:id", findUser, deleteUser);

export default router;
