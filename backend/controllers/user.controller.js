const User = require("../models/user.model.js");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email } = req.body
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.send({ message: "email already in use" });
    }
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
