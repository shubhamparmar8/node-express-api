import User from "../models/User.js";

// get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get a single user
export const getUser = (req, res) => {
  res.json(res.user);
};

// create user
export const createUser = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  const { firstName, lastName, age } = req.body;

  if (firstName != null) {
    res.user.firstName = firstName;
  }

  if (lastName != null) {
    res.user.lastName = lastName;
  }

  if (age != null) {
    res.user.age = age;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
