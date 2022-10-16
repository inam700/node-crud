import USER from "../models/Users.js";

export const createUser = async (req, res) => {
  const user = new USER(req.body);
  try {
    await user.save();
    res.send(`User with name ${user.name} is added to database`);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllUsers = async (req, res) => {
  const users = await USER.find({});

  res.send(users);
};

export const getUserById = async (req, res) => {
  let { id } = req.params;
  const user = await USER.findById(id);

  res.send(user);
};

export const removeUser = async (req, res) => {
  let { id } = req.params;

  await USER.remove({ id });

  res.send(`user with id ${id} has been deleted`);
};

export const updateUser = async (req, res) => {
  let { id } = req.params;
  let { name, age } = req.body;

  const user = await USER.findById(id);

  if (name) user.name = name;
  if (age) user.age = age;

  res.send(`user with id ${id} has been updated`);
};
